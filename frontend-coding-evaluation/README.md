# Frontend Evaluation Project

A React-based e-commerce project designed to evaluate frontend development skills.
This project contains intentional issues and missing features for candidates to identify and implement.

## General guidelines

### Time and time tracking

We expect you to spend between 2 to 3 hours working on this project. This timeboxed period helps us evaluate how you prioritize tasks and manage time effectively.
The project is designed to evaluate both junior and senior profiles, and includes enough tasks to keep you busy for a much longer period.

The list of issues is not prioritized in any way or form, it includes both easy, medium and harder tasks.

#### Time Tracking Requirements

Every task listed below has a 'time spent' item, track this when you completed a task.

1. Record start and end times for each task
2. Include brief comments about your approach and any challenges

### GIT

You received this project in a zip file, we expect you return the solution by providing a public GIT repository, named {firstname}-{lastname}-{uuid}. Generate the UUID yourself, invite `@maartenraes` as maintainer.

The GIT repo should include a main branch and a development branch, the development branch is the default branch.
1. Create a new branch from development for each chapter (e.g. `feat/chapter-1`, `feat/chapter-2`, `feat/chapter-3`)
2. For each task within a chapter:
   - Create a commit with a descriptive message of the task implementation
   - Push your changes to the chapter branch
3. When all tasks in a chapter are complete, open a PR from the chapter branch to development
4. Tag `@maartenraes` as a reviewer on the PR
5. After creating the PR, you can merge it to avoid conflicts. The closed PRs will be used during evaluation to review implementations per chapter

### Linting and formatting

The project includes ESLint for code quality and Prettier for consistent code formatting. ESLint is configured with the `eslint-config-ballistix` preset that enforces best practices and catches potential issues. Prettier ensures consistent code style across the codebase.

Both tools are pre-configured and should work out of the box with most IDEs, make sure to have them enabled and running in your IDE of choice.

### AI Usage Policy

**AI assistance is encouraged!**
We believe in leveraging AI tools to enhance problem-solving and learning. Feel free to use AI assistants (like ChatGPT, GitHub Copilot, or similar tools) while working on this project.

However, we request to document your AI usage in the `AI_PROMPTS.md` file.

This approach reflects modern development practices where AI tools are valuable allies in problem-solving and learning.

## Getting Started

1. Install dependencies

```bash
yarn
```

2. Start the development server

```bash
yarn dev
```

3. Build and preview a production build

```bash
yarn build && yarn preview
```
## All tasks

Tasks were divided into three chapters, to make sure there is a range from easier to harder features and you spend your time wisely on providing insight into your skill level. 
Only move on to the next chapter once you have completed the previous chapter. 
Within a chapter you choose the order of implementation, there is no value in implementing certain tasks before others.

See the following files for detailed task breakdowns:

- [Chapter 1: Core Functionality](CHAPTER_1.md)
- [Chapter 2: Enhancement Features](CHAPTER_2.md) 
- [Chapter 3: Advanced Features](CHAPTER_3.md)

Each chapter file contains:
- Detailed task descriptions
- Task categories (Quick Win, Medium, High Value)
- Checkboxes to track completion
- Space for implementation notes

## Additional Notes

Use this section to provide any additional feedback, suggestions for improvements, or explanations of your approach to solving these issues.

## AI Documentation

See `AI_PROMPTS.md` for documentation of AI usage during problem-solving.
