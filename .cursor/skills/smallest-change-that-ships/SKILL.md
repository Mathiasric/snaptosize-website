---
name: smallest-change-that-ships
description: Biases implementation toward the smallest working code change that can ship immediately, ignoring non-critical edge cases and favoring working code over perfect code. Use when the user emphasizes speed, minimal diffs, or getting something shipped today.
---

# Smallest Change That Ships

## Instructions

When this skill is active, follow these principles unless the user explicitly overrides them:

1. **Ship today**
   - Prefer solutions that can be implemented and verified **right now**.
   - Avoid refactors or rewrites unless they are absolutely required to make the change work.

2. **Smallest possible change**
   - Minimize the size and blast radius of edits (fewest files, smallest diffs).
   - Prefer local fixes over new abstractions.
   - Reuse existing patterns and utilities instead of introducing new ones.

3. **Working code over perfect code**
   - Prioritize **correctness for the main, realistic path** over theoretical perfection.
   - Skip optimizations, generalization, and future-proofing unless they are trivial.
   - Keep code readable and straightforward, but do not over-design.

4. **Ignore non-critical edge cases**
   - Handle only edge cases that would:
     - Clearly break the main flow, or
     - Cause data loss, security issues, or crashes.
   - Otherwise, mention unhandled edge cases briefly in the explanation but do not implement them.

5. **Stay within existing architecture**
   - Fit the change into the current architecture and style instead of improving the architecture.
   - Do not introduce new major dependencies, services, or patterns unless strictly necessary.

## When to Apply This Skill

Use this skill when:
- The user mentions shipping quickly, “just make it work”, “smallest change”, or similar language.
- Fixing a bug or adding a small feature where scope creep is risky.
- Adjusting UI copy, layout, or behavior with minimal impact.

Do **not** apply this skill when:
- The user explicitly asks for a robust, generalized, or long-term architecture.
- The task is security-sensitive or involves critical data integrity where edge cases must be handled.

## Workflow

Follow this workflow when implementing changes with this skill:

1. **Clarify the main success path**
   - Identify the most common user journey or scenario that must work.
   - Optimize the solution primarily for that path.

2. **Locate the narrowest change point**
   - Find the single function, component, or file where the change can be applied with the least impact.
   - Prefer modifying existing logic over adding new layers or indirection.

3. **Implement the minimal diff**
   - Make the smallest set of edits required to:
     - Meet the user-visible requirement, and
     - Keep tests (if any) passing.

4. **Validate quickly**
   - Run only the tests or checks that are relevant to the changed area, if available.
   - Perform a focused manual or logical check of the main path.

5. **Document trade-offs briefly**
   - In the explanation back to the user, clearly state:
     - That you chose the smallest-change approach.
     - Any important edge cases that are not handled.
     - Suggestions for follow-up improvements only if they are obvious and low-effort.

## Examples

- **Feature tweak**
  - Instead of introducing a new configuration system, hard-code a reasonable default or reuse an existing config value that is already available.

- **Bug fix**
  - Patch the specific conditional or branch causing the bug in the relevant function, rather than refactoring the entire module.

- **UI change**
  - Update the existing component or style in place, without introducing a design system or layout overhaul.

## Summary

This skill is about **speed with discipline**:
- Ship a **small, focused, working change today**.
- Avoid scope creep, over-engineering, and unnecessary refactors.
- Be explicit about what is intentionally left out, especially around edge cases.

