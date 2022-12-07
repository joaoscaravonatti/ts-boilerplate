import { file } from '@/file'
import { expect } from 'chai'

describe('file', () => {
  it('should be a function', () => {
    expect(file).to.be.a('function')
  })

  it('should return nothing', () => {
    expect(file()).to.be.eq(undefined)
  })
})
