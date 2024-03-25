//basic object code

let main = {
    Name:'shanthakumar',
    Age:21,                            //properties
    Place:'avadi',
    }
    
    console.log(main);

//calling function in object

let main2 = {
    Name:'shanthakumar',
    Age:21,                             //properties 
    Place:'avadi',
    degree:'ug',

    input: function(){                                 //or input(){........}          //method
        console.log("The process is correct");
    }
    }

    main2.input()


    //calling particullar value

    let main3 = {
        Name:'shanthakumar',
        Age:21,                            
        Place:'avadi',
        }
        
        console.log(main3.Name);