#!/usr/bin/env bash
# PreToolUse guard for Figma REST screenshot tools (figma_take_screenshot,
# figma_get_component_image). These default to scale=2 and have no auto-cap,
# which trips the 2000 px multi-image limit on any canvas ≥1000 px and
# corrupts the session.
#
# Rule: scale must be ≤ 1. Missing scale = default 2 = block.
# Safe alternative: figma_capture_screenshot (Desktop Bridge plugin path)
# auto-caps at 1568 px on the longest side.

set -euo pipefail

INPUT="$(cat)"

DECISION=$(echo "$INPUT" | jq -r '
  if ((.tool_input.scale // 2) | tonumber) > 1 then "deny" else "allow" end
')

if [[ "$DECISION" == "deny" ]]; then
  TOOL=$(echo "$INPUT" | jq -r '.tool_name')
  SCALE=$(echo "$INPUT" | jq -r '.tool_input.scale // "default(2)"')
  jq -n --arg tool "$TOOL" --arg scale "$SCALE" '{
    hookSpecificOutput: {
      hookEventName: "PreToolUse",
      permissionDecision: "deny",
      permissionDecisionReason: ("\($tool) called with scale=\($scale). REST screenshot tools have no auto-cap; scale > 1 risks the 2000 px image limit and will corrupt the session. Retry with scale=1, or switch to figma_capture_screenshot (Desktop Bridge plugin) which auto-caps at 1568 px.")
    }
  }'
fi

exit 0
