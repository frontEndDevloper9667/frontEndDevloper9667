document.addEventListener("DOMContentLoaded",()=>{
    let firstName   = document.querySelector(".first-Name");
    let lastName    = document.querySelector(".last-Name");
    let phoneNumber = document.querySelector(".phNumber");
    let emailId     = document.querySelector(".emailId");
    let saveButton  = document.querySelector(".save");
    let nameList    = document.querySelector(".nameList");
    let infoList    = document.querySelector(".infoList");
    let iconButton  = document.querySelector(".icon");
    let imageIcon   = document.querySelector(".icon2");
    let imgInput    = document.querySelector(".img-input");
    let imageSet    = document.querySelector(".image1");
    let searchText  = document.querySelector(".search");
    let addContactBtn= document.querySelector(".addContact");
    let backButton   = document.querySelectorAll(".backBtn");
    let nameList2 = document.querySelector('.nameList2');
    let switchSim = document.querySelector(".switchSim");
    let switchSim2 = document.querySelector(".switchSim2");
    // let Sim2Page = document.querySelector(".sim2");

    let contactsArr = [];
    let contactsArr2 = [];
    let letterArr =[];
    

    nameList.style.display = ""
    nameList2.style.display="none"

    switchSim2.addEventListener("change",()=>{
        if(switchSim2.value==="1")
            {   nameList.style.display = ""
                nameList2.style.display="none"
            }
        else {
               nameList.style.display = "none"
                nameList2.style.display=""
            }
        })

  

    addContactBtn.addEventListener("click",()=>{
        document.querySelector(".container2").style.visibility='visible';
        document.querySelector(".container1").style.visibility='hidden';
        document.querySelector(".container3").style.visibility='hidden';
    })

    iconButton.addEventListener("click",()=>{
        imgInput.click();
    })
    
    imgInput.addEventListener("change",()=>{
        imageSet.src=URL.createObjectURL(imgInput.files[0]);
        iconButton.style.display="none"
        imageIcon.style.display="none"
    })

    saveButton.addEventListener("click",()=>{
        let fName = firstName.value.trim();
        let lName = lastName.value.trim();
        let phNo  = phoneNumber.value.trim();
        let email = emailId.value.trim();
        let firstLetter =fName.slice(0,1).toUpperCase();

        if(fName==='' && lName==='' && phNo==='' && email==='') return;
        let infoImg= imageSet.src;
        let contactObj = {
            fName,
            lName,
            phNo,
            email,
            infoImg,
            firstLetter
        }
        console.log(firstLetter)
         
            if(switchSim.value==="1")
                {
            contactsArr.push(contactObj);
            nameList.innerHTML='';
            contactsArr.sort((a,b)=>a.fName.localeCompare(b.fName));
            
            contactsArr.forEach(item=>{
                let contactNameList= document.createElement('li');
                contactNameList.innerHTML =
                ` <span class='letters'>${item.firstLetter}</span>
                <div class='nameBox2'>
                <img class='nameListImg' src='${item.infoImg}'>
                <span class='liName'>${item.fName} ${item.lName}</span>
                </div>
                `;
                contactNameList.classList.add('l1');
                nameList.appendChild(contactNameList);

                let contactInfoList       = document.createElement("li");
                contactInfoList.innerHTML = `<img src='${infoImg}' class='info-img'>
                <pre class='infoName'>${fName} ${lName}</pre>
                <div class='contact-info'>
                <h4>Contact info</h4>
                <pre class='infoNumber'>${phNo}</pre>
                <pre class='infoEmail'>${email}</pre>
                </div>`;
                infoList.style.display='none';
                contactInfoList.classList.add('l2');
                infoList.appendChild(contactInfoList);

                contactNameList.addEventListener("click",()=>{
                    infoList.querySelectorAll('.l2').forEach((listInfo)=>{
                        listInfo.style.display='none';
                    })
                    infoList.style.display='';
                    contactInfoList.style.display='';
                    document.querySelector(".container3").style.visibility='visible';
                    document.querySelector(".container1").style.visibility='hidden';
                })
            })
        }
        else {
            contactsArr2.push(contactObj);
            nameList2.innerHTML='';
            contactsArr2.sort((a,b)=>a.fName.localeCompare(b.fName));

            contactsArr2.forEach(item=>{
                let contactNameList= document.createElement('li');
                contactNameList.innerHTML =
                `
                <div class='nameBox2'>
                <img class='nameListImg' src='${item.infoImg}'>
                <span class='liName'>${item.fName} ${item.lName}</span>
                </div>
                `;
                contactNameList.classList.add('l1');
                nameList2.appendChild(contactNameList);


                let contactInfoList       = document.createElement("li");
                contactInfoList.innerHTML = `<img src='${infoImg}' class='info-img'>
                <pre class='infoName'>${fName} ${lName}</pre>
                <div class='contact-info'>
                <h4>Contact info</h4>
                <pre class='infoNumber'>${phNo}</pre>
                <pre class='infoEmail'>${email}</pre>
                </div>`;
                infoList.style.display='none';
                contactInfoList.classList.add('l2');
                infoList.appendChild(contactInfoList);

                contactNameList.addEventListener("click",()=>{
                    infoList.querySelectorAll('.l2').forEach((listInfo)=>{
                        listInfo.style.display='none';
                    })
                    infoList.style.display='';
                    contactInfoList.style.display='';
                    document.querySelector(".container3").style.visibility='visible';
                    document.querySelector(".container1").style.visibility='hidden';
                })
            })
          
       }
            
        
        


       
        firstName.value='';
        lastName.value='';
        phoneNumber.value='';
        emailId.value='';
        imageSet.src='';
       
        iconButton.style.display="";
        imageIcon.style.display="";

        document.querySelector(".container2").style.visibility='hidden';
        document.querySelector(".container1").style.visibility='visible';

        
        
        
    })
    
    searchText.addEventListener("input",(e)=>{
        let searchText2 = e.target.value.toLowerCase();
        let nameListArr = nameList.querySelectorAll('li');
        let nameList2Arr = nameList2.querySelectorAll('li');
        // nameList2.style.display=""
        // nameList2.style.display="none"

        nameListArr.forEach((item)=>{
            
            let listItem = item.querySelector(".liName");
            if(listItem.textContent.toLowerCase().includes(searchText2))
                {
                    item.style.display="";
                    // nameList2.style.display="";
                }
                else
                {
                    item.style.display="none";
                    // nameList2.style.display="none"
                }
        })
        nameList2Arr.forEach((item2)=>{
            
            let listItem2 = item2.querySelector(".liName");
            
            if(listItem2.textContent.toLowerCase().includes(searchText2))
                {
                    // nameList.style.display="none"
                    item2.style.display="";
                    // nameList2.style.display=""
                    
                    
                }
                else
                {
                    item2.style.display="none";
                    // nameList2.style.display=""
                    
                }
        })
    })

    backButton.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        document.querySelector(".container1").style.visibility='visible';
        document.querySelector(".container3").style.visibility='hidden';
        document.querySelector(".container2").style.visibility='hidden';
    })
})

})