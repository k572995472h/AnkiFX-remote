---
description: How to manage Git branching and commits for new features and fixes
---

# Git Feature Workflow

Use this workflow to ensure every task is tracked in a separate branch and history is maintained.

1. **Check Current State**:
   Run `git status` to ensure you are on a clean working tree.

2. **Sync with Main**:
   Ensure your local `main` is up to date (even if local-only).
   ```bash
   git checkout main
   ```

3. **Create Feature Branch**:
   Create a new branch named `feat/[feature-name]` or `fix/[fix-name]`.
   ```bash
   git checkout -b feat/my-new-feature
   ```

4. **Incremental Commits**:
   Commit your changes frequently with descriptive, conventional messages (e.g., `feat: added marquee toggle`, `fix: corrected canvas sizing`).

5. **Merge back to Main**:
   Once the task is verified and the user is happy, merge it back into `main`.
   ```bash
   git checkout main
   git merge feat/my-new-feature
   ```

6. **Cleanup**:
   Delete the feature branch after merging.
   ```bash
   git branch -d feat/my-new-feature
   ```
