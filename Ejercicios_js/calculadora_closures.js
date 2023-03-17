function createCalculator() {
    let  total=0

    return {

        add(value){
            total=total+value
            console.log(total)
        },
        
        subtract(value){
            total=total-value
            console.log(total)
        },
        multiply(value){
            total=total*value
            console.log(total)
        },
        divide(value){
            total=total/value
            console.log(total)
        },
        clear(){
            total=0
            console.log(total)
        },
        getTotal(){
            console.log(total)
        }

    }

  }

  const calculator = createCalculator()
  calculator.add(10)
  calculator.subtract(-10)
  calculator.clear()
