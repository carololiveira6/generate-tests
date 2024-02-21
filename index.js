#!/usr/bin/env node

const fs = require('fs')
const path = require('path')

function listRootDirectory() {
  const rootDir = path.resolve(__dirname, '.')

  fs.readdir(rootDir, (error, files) => {
    if (error) {
      console.error('Error reading directory', error)
    } else {
      console.log('Files and directories in the root directory:')
      files.forEach((file) => {
        console.log(file)
      })
    }
  })
}

listRootDirectory();