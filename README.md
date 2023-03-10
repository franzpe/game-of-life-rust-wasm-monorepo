# Game of life - [WASM/RUST/REACT/MONOREPO]

This repository serves as a great example on how to work with wasm and any frontend basically in monorepo, simulating "Game of life".

Plese see published [game here](https://franzpe.github.io/game-of-life-rust-wasm-monorepo/).

## About game of life

> The universe of the Game of Life is an infinite two-dimensional orthogonal grid of square cells, each of which is in one of two possible states, alive or dead, or "populated" or "unpopulated". Every cell interacts with its eight neighbours, which are the cells that are horizontally, vertically, or diagonally adjacent. At each step in time, the following transitions occur:

1. Any live cell with fewer than two live neighbours dies, as if caused by underpopulation.
2. Any live cell with two or three live neighbours lives on to the next generation.
3. Any live cell with more than three live neighbours dies, as if by overpopulation.
4. Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.

The initial pattern constitutes the seed of the system. The first generation is created by applying the above rules simultaneously to every cell in the seed—births and deaths occur simultaneously, and the discrete moment at which this happens is sometimes called a tick (in other words, each generation is a pure function of the preceding one). The rules continue to be applied repeatedly to create further generations.

For in depth explenation of the rules please see [wikipedia](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life).

## About tech stack

- **WebAssembly (abbreviated Wasm)** is a binary instruction format for a stack-based virtual machine. Wasm is designed as a portable compilation target for programming languages, enabling deployment on the web for client and server applications.

- **Rust** is a multi-paradigm, high-level, general-purpose programming language. Rust emphasizes performance, type safety, and concurrency. Rust enforces memory safety—that is, that all references point to valid memory—without requiring the use of a garbage collector or reference counting present in other memory-safe languages. To simultaneously enforce memory safety and prevent concurrent data races, Rust's "borrow checker" tracks the object lifetime of all references in a program during compilation.

- **wasm-pack** helps you build rust-generated WebAssembly packages that you could publish to the npm registry, or otherwise use alongside any javascript packages in workflows that you already use, such as webpack. [link](https://github.com/rustwasm/wasm-pack)

- A **monorepo** is a single repository containing multiple distinct projects, with well-defined relationships.

- **react** is a javascript library for building UIs.

## Usage

```
cd monorepo-rust-react
yarn

cd packages/wasm
yarn build

cd ../../app
yarn start

```
