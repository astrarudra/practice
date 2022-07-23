// Codility Problem - Find position where Max (Left + Right) Jump.

const maxForPos = (blocks) => { // 2log(n)
  const rightJumpTill = new Array(blocks.length).fill(0)
  for(var i=0; i < blocks.length; i++){ // main loop
    for(var j=i+1 ; j < blocks.length; j++){ // find max right from pos i
      if(blocks[j] >= blocks[j - 1])
        rightJumpTill[i] += 1
      else{
        let k = 0
        for(k = 0; k < rightJumpTill[i]; k++){ // skip till max.
          rightJumpTill[i + k] = rightJumpTill[i] - k
        }
        i = i + k
        break
      }
    }
  }
  return rightJumpTill
}

solution = (blocks) => {
  const rightJumpTill = maxForPos(blocks)
  const leftJumpTill = maxForPos(blocks.reverse()).reverse()
  console.log(rightJumpTill, leftJumpTill)
  let maximum = 0
  for(var i in rightJumpTill){
    diff = rightJumpTill[i] + leftJumpTill[i]
    maximum = Math.max(diff, maximum)
  }
  console.log(maximum + 1)
  return maximum + 1
}

solution([2,6,8,5])
