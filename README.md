- Component namingler düzelecek
- Section component'ı diğer componentlarda kullanılacak
- Title componentı için bir standart belirlenecek (font-size, font-weight, color)
- Base componentlar belirlenip reuse edilecek (button gibi

Figma: https://www.figma.com/file/LCgTUgVNpKKMQQ3xlAca4p/frontendship?node-id=0%3A1

## Getting Started

## Contribute To The Project and Run Locally

To contribute:

Fork the project.

```bash
  git clone https://github.com/<username>/website
```

Go to the project directory

```bash
  cd website
```

Change the branch

```bash
  git checkout development
```

Install dependencies

```bash
  yarn
```

Start the development server

```bash
  yarn dev
```

## How to open a pull request

Make sure your fork repository is synced with remote (upstream, original) repository to avoid conflicts. You can either [check here](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/syncing-a-fork) or simply use terminal codes below.

### Syncing a fork branch

First add upstream with:

```bash
git remote add upstream https://github.com/frontendship/website
```

Then to get upstream's updates run:

```bash
git fetch upstream
```

Check out your fork's local default branch:

```bash
git checkout <BRANCH_NAME>
```

Then merge upstream with your fork (local) repo:

```bash
git merge upstream/<BRANCH_NAME>
```

### Example

```bash
git remote add upstream https://github.com/frontendship/website
git fetch upstream
git checkout development
git merge upstream/development
```

## Usage/Examples

```javascript
import Header from 'components/Header'

function App() {
  console.log('Hello world')
  return <Header />
}
```

## Contributing

Contributions are always welcome!

See `contributing.md` for ways to get started.

![Logo](https://camo.githubusercontent.com/2d9ba588f573fd812658381f62e52bc54aaa780827a82b2608341fb908f08cff/68747470733a2f2f6d656469612e646973636f72646170702e6e65742f6174746163686d656e74732f313032353334383134313335343037343132342f313033303932373536343034303036313130382f547769747465725f42616e6e65722e706e673f77696474683d31343430266865696768743d343830)
