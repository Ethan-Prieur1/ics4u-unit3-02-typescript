/**
 * This program does factorial recursion
 *
 * By:      Ethan Prieur
 * Version: 1.0
 * Since:   2022-11-09
 */

import promptSync from 'prompt-sync'

function factorialInteger(integer: number): number {
        if (integer < 0) {
          return -1
        } else if (integer = 0) {
          return 1
        } else {
          return factorialInteger(integer * (integer -1))

        }
}

function main() {
  const prompt = promptSync()
  const userNumber = prompt('Enter a Number to Find the Factorial: ')
  console.log(`The Factorial of ${userNumber} is ${factorialInteger(integer)}`)
  console.log('\nDone.')
}
main()
