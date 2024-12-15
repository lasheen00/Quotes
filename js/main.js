
var quoteList =[

    { quoteP: "“Be yourself; everyone else is already taken.”" , quoteName: "― Oscar Wilde"},
    { quoteP: "“So many books, so little time.”" , quoteName : "― Frank Zappa" }
    
];



    function clicked()
    {
        var newIndex = Math.floor(Math.random() * quoteList.length);

        document.getElementById("p-1").innerHTML= quoteList[newIndex].quoteP;
        document.getElementById("p-2").innerHTML= quoteList[newIndex].quoteName;

       
        
    }   
    








