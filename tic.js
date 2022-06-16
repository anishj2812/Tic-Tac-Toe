let n=0;
let arr=[[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]];
let contain=document.getElementById('contain');
for(let i=1;i<=3;i++)
{
    for(let j=1;j<=3;j++)
    {
        let s="";
        s=s+i.toString()+j.toString();
        let pos=document.getElementById(s);
        pos.addEventListener('click',()=>{
            if(n==0)
            {
                if(pos.innerHTML.length==0)
                {
                    pos.innerHTML='O';
                    pos.style.color='green';
                    arr[i][j]=1;
                    n=n^1;
                }
            }
            else
            {
                if(pos.innerHTML.length==0)
                {
                    pos.innerHTML='X';
                    pos.style.color='blue';
                    arr[i][j]=2;
                    n=n^1;  
                }
            }
        })

    }
}
let check=document.getElementById("body");
check.addEventListener('click',()=>{
    for(let i=1;i<=3;i++)
    {
        for(let j=1;j<=3;j++)
        {
            let s="";
            s=s+i.toString()+j.toString();
            let pos=document.getElementById(s);
            if(pos.innerHTML.length==0)
            {
                return;
            }
            if(i==3 && j==3)
            {
                contain.innerHTML="Game Over";
                contain.style.color="red";  
            }
        }
    }
}
)
check.addEventListener('click',()=>{
    for(let i=1;i<=3;i++)
    {
        for(let j=1;j<=3;j++)
        {
            // console.log(arr[i][j]+" ");
            // if(arr[i][j]==undefined)
            // console.log(i+" "+j+" ");
            if(arr[i][j]!=0 && arr[i][j]==arr[i-1][j] && arr[i+1][j]==arr[i][j])
            {
                console.log(i+" "+j+" ");
                let s="";
                s=s+i.toString()+j.toString();
                let pos=document.getElementById(s);
                pos.style.color="red";
                s="";
                s=s+(i-1).toString()+j.toString();
                pos=document.getElementById(s);
                pos.style.color="red";
                s="";
                s=s+(i+1).toString()+j.toString();
                pos=document.getElementById(s);
                pos.style.color="red";
                contain.innerHTML="Game Over";
                contain.style.color="red";  
                // let s1="";
                // s1=s1+(i-1).toString()+j.toString();
                // let pos1=document.getElementById(s1);
                // pos1.style.color="red";
                // let s2="";
                // s2=s2+(i+1).toString()+j.toString();
                // let pos2=document.getElementById(s2);
                // pos2.style.color="red";
            }
            if(arr[i][j]!=0 && arr[i][j]==arr[i][j-1] && arr[i][j+1]==arr[i][j])
            {
                console.log(i+" "+j+" ");
                let s="";
                s=s+i.toString()+j.toString();
                let pos=document.getElementById(s);
                pos.style.color="red";
                s="";
                s=s+(i).toString()+(j-1).toString();
                pos=document.getElementById(s);
                pos.style.color="red";
                s="";
                s=s+(i).toString()+(j+1).toString();
                pos=document.getElementById(s);
                pos.style.color="red";
                contain.innerHTML="Game Over";
                contain.style.color="red";  
            }
            if(arr[i][j]!=0 && arr[i][j]==arr[i-1][j-1] && arr[i+1][j+1]==arr[i][j])
            {
                console.log(i+" "+j+" ");
                let s="";
                s=s+i.toString()+j.toString();
                let pos=document.getElementById(s);
                pos.style.color="red";
                s="";
                s=s+(i-1).toString()+(j-1).toString();
                pos=document.getElementById(s);
                pos.style.color="red";
                s="";
                s=s+(i+1).toString()+(j+1).toString();
                pos=document.getElementById(s);
                pos.style.color="red";
                contain.innerHTML="Game Over";
                contain.style.color="red";  
            }
            if(arr[i][j]!=0 && arr[i][j]==arr[i+1][j-1] && arr[i-1][j+1]==arr[i][j])
            {
                console.log(i+" "+j+" ");
                let s="";
                s=s+i.toString()+j.toString();
                let pos=document.getElementById(s);
                pos.style.color="red";
                s="";
                s=s+(i+1).toString()+(j-1).toString();
                pos=document.getElementById(s);
                pos.style.color="red";
                s="";
                s=s+(i-1).toString()+(j+1).toString();
                pos=document.getElementById(s);
                pos.style.color="red";
                contain.innerHTML="Game Over";
                contain.style.color="red";  
            }
        }
    }
})
let button=document.getElementById("button");
button.addEventListener('click',()=>{
    for(let i=1;i<=3;i++)
    {
        for(let j=1;j<=3;j++)
        {
            let s="";
            s=s+i.toString()+j.toString();
            let pos=document.getElementById(s);
            pos.innerHTML="";
            contain.innerHTML="Play!";
            contain.style.color="black"; 
            pos.style.color="black"; 
            arr[i][j]=0; 
        }
    }
})
