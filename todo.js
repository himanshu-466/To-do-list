
var container = document.querySelector('.container');
var value1 = document.querySelector('.input');
var add1 = document.getElementById('add');  


class lastitem{
    constructor(name,index){
        this.create(name,index);

    }

    create(name,index)
    {
        var li = document.createElement('div');
        li.classList.add('item');
        var input = document.createElement('input');
        input.type="text";
        input.disabled=true;
        input.value=name;
        input.classList.add('item_input'); 
        var remove = document.createElement('button');
        var edit = document.createElement('button');
        remove.classList.add('remove');
        edit.classList.add('edit');
        remove.innerHTML="<i class='fas fa-trash'></i>";
        edit.innerHTML="<i class='far fa-edit'></i>";
        remove.addEventListener('click', () =>this.remove(index));
        edit.addEventListener('click', () =>this.edit(index));
        container.appendChild(li);
        li.appendChild(input);
        li.appendChild(remove);
        li.appendChild(edit);

       

    }
    remove(index)
    {
        let webtask = localStorage.getItem("localtask");
        let taskobj = JSON.parse(webtask);
        taskobj.splice(index,1);
        localStorage.setItem("localtask",JSON.stringify(taskobj));
        showtask();
 

    }
    edit(index)
    {
        let savebtn = document.getElementById('save');
        let saveindex = document.getElementById('saveindex');
        savebtn.style.display="block";
        add1.style.display="none";
        saveindex.value=index;
        let webtask = localStorage.getItem("localtask");
        let taskobj = JSON.parse(webtask);
        value1.value=taskobj[index];  
        savebtn.addEventListener('click', () =>this.savetask(saveindex));
        window.addEventListener('keydown',(e)=>{
            if(e.which==13)
            {
                if(add1.style.display=="none")
                {
                    this.savetask(saveindex)
                }
                
            }
        })

    }
    savetask(saveindex)
{
    let savebtn = document.getElementById('save');
    let webtask = localStorage.getItem("localtask");
    let taskobj = JSON.parse(webtask);
    // console.log(savebtn);
    console.log(saveindex.value);
    console.log(taskobj[saveindex.value]=value1.value);
    if(value1.value!="")
    {
    taskobj[saveindex.value] = value1.value;
    localStorage.setItem("localtask",JSON.stringify(taskobj));
    savebtn.style.display="none";
    add1.style.display="block";

    container.innerHTML=""
        taskobj.forEach((element,index) => {
            this.create(element,index)
            
        });
 
    value1.value=""
    
    }
}

}
showtask()
if(add1!=null)
{
    add1.addEventListener('click',check);
}

window.addEventListener('keydown',(e)=>{
    if(e.which==13)
    {
        if(add1.style.display=="block")
        {
        check();
        }
    }
})



// For Adding Task
function check()
{
    if(value1!=null){
    if(value1.value!="")
    {
        addtaskinputvalue = value1.value;
        let webtask = localStorage.getItem("localtask");
        if(webtask==null)
        {
            taskobj =[];
        }
        else{
            taskobj = JSON.parse(webtask);
        }

        taskobj.push(addtaskinputvalue);
        localStorage.setItem("localtask",JSON.stringify(taskobj));
        showtask();


    }
}
}
// Show Function
function showtask()
{
    let webtask = localStorage.getItem("localtask");
    if(webtask==null)
    {
        taskobj =[];
    }
    else{
        taskobj = JSON.parse(webtask);
    } 
        
        // console.log(taskobj);
        container.innerHTML=""
        taskobj.forEach((element,index) => {
            new lastitem(element,index)
            
        });
        value1.value=""
        

}




// Remove All Work
function removeAll()
{

    let reponse= confirm("Do You Want To Delete")
    {
        if(reponse)
        {
            let webtask = localStorage.getItem("localtask");
            let taskobj = JSON.parse(webtask);
            if(webtask==null)
            {
                taskobj =[];
            }
            else{
                taskobj = JSON.parse(webtask);
                taskobj=[];
            }

            localStorage.setItem("localtask",JSON.stringify(taskobj));
            value1.value='';
            let savebtn = document.getElementById('save');
            savebtn.style.display="none";
             add1.style.display="block";
            showtask();
            // document.querySelector('.container').innerHTML="";
        }
    }
   
}
