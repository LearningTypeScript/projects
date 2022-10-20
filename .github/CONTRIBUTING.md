# Contributing

Thanks for your interest in contributing to _Learning TypeScript_'s projects! 💖

> ⚠ Note: this repository is specifically for the projects that accompany the Learning TypeScript website.
> To report any other kind of issue for learningtypescript.com, see [github.com/LearningTypeScript/site](https://www.github.com/LearningTypeScript/site).

## Code of Conduct

This project contains a [Contributor Covenant code of conduct](./CODE_OF_CONDUCT.md) all contributors are expected to follow.

## Getting Started

The [README.md #Setup section](../README.md#setup) contains the general right steps to get started locally.
If you plan on sending pull requests, however, you'll need to [fork the repository](https://docs.github.com/en/get-started/quickstart/fork-a-repo) to your personal account and clone it from there instead:

```shell
git clone https://github.com/your-username/projects learning-typescript-projects
cd learning-typescript-projects
npm install
```

## Reporting Issues

Please do [report an issue on the issue tracker](https://github.com/LearningTypeScript/projects/issues/new/choose) if there's any bugfix, documentation improvement, or general enhancement you'd like to see in the repository!
Please fully fill out all required fields in the most appropriate issue form.

## Sending Contributions

Sending your own changes as contribution is always appreciated!
There are two steps involved:

1. [Finding an Issue](#finding-an-issue)
2. [Sending a Pull Request](#sending-a-pull-request)

### Finding an Issue

With the exception of very small typos, all changes to this repository generally need to correspond to an [open issue marked as `accepting prs` on the issue tracker](https://github.com/LearningTypeScript/projects/issues?q=is%3Aopen+is%3Aissue+label%3A%22accepting+prs%22).
If this is your first time contributing, consider searching for [issues that also have the `good first issue` label](https://github.com/LearningTypeScript/projects/issues?q=is%3Aopen+is%3Aissue+label%3A%22accepting+prs%22+label%3A%22good+first+issue%22).
If the issue you'd like to fix isn't found on the issue, see [Reporting Issues](#reporting-issues) for filing your own (please do!).

### Sending a Pull Request

Once you've identified an open issue accepting PRs that doesn't yet have a PR sent, you're free to send a pull request.
Be sure to fill out the pull request template's requested information -- otherwise your PR will likely be closed.

PRs are also expected to have a title that adheres to [commitlint](https://github.com/conventional-changelog/commitlint) and uses a [gitmoji emoji](https://gitmoji.dev).
Only PR titles need to be in that format, not individual commits.
Don't worry if you get this wrong: you can always change the PR title after sending it.
Check [previously merged PRs](https://github.com/LearningTypeScript/projects/pulls?q=is%3Apr+is%3Amerged+-label%3Adependencies+) for reference.

Please try not to force-push commits to PRs that have already been reviewed.
Doing so makes it harder to review the changes.
We squash merge all commits so there's no need to try to preserve Git history within a PR branch.

### Contribution Credits

After your PR is merged, you should be added to the [#Contributors ✨](https://github.com/LearningTypeScript/projects/#contributors-) section in the README.md.
If it doesn't happen within a day, ping @JoshuaKGoldberg.
