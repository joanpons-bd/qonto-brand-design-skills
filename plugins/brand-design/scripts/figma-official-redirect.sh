#!/usr/bin/env bash
# PreToolUse guard for the official Figma MCP get_screenshot tool. It has no
# size-cap parameter at all, so any large frame trips the 2000 px image limit
# and corrupts the session. Always deny and redirect to figma_capture_screenshot
# (Desktop Bridge plugin path), which auto-caps at 1568 px on the longest side.
#
# If the Desktop Bridge plugin isn't connected, the user should fix that first
# via figma_get_status before screenshotting anything.

set -euo pipefail

# Drain stdin so the tool harness doesn't see a broken pipe.
cat > /dev/null

jq -n '{
  hookSpecificOutput: {
    hookEventName: "PreToolUse",
    permissionDecision: "deny",
    permissionDecisionReason: "Official Figma MCP get_screenshot has no size-cap parameter and risks the 2000 px image limit (which corrupts the session and cannot be recovered). Use figma_capture_screenshot (Desktop Bridge plugin path) instead — it auto-caps at 1568 px on the longest side. If the Desktop Bridge plugin is not connected, run figma_get_status first and fix the connection before screenshotting."
  }
}'

exit 0
