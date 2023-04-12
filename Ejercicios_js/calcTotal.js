function calcTotal(orders) {
  // Tu código aquí 👈
  console.log(orders);
  let total=orders.map((item)=>item.total).reduce((sum,item)=>sum+item,0)
  console.log(total);
}

calcTotal([
    {
      customerName: "Nicolas",
      total: 100,
      delivered: true,
    },
    {
      customerName: "Zulema",
      total: 120,
      delivered: false,
    },
    {
      customerName: "Santiago",
      total: 20,
      delivered: false,
    }
  ])