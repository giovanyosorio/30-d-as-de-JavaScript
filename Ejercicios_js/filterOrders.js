function filterOrders(arrays) {
    // Tu código aquí 👈
    console.log(arrays)
    let sol=[]
    let filterbyTotal=arrays.filter((item)=>item.total>=100 && item.delivered==true)
    return filterbyTotal;

}
filterOrders([{
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
        total: 300,
        delivered: true,
    }
])