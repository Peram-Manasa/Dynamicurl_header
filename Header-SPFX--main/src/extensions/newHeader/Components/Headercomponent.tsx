 import * as React from 'react'
import './Headercomponent.scss'
import Marquee from "react-fast-marquee";
import { AiOutlineSearch } from "react-icons/ai";
import { CgMenuGridO } from "react-icons/cg";
// import { TbFileInvoice,TbQuote } from "react-icons/tb";
// import { BsFillDiagram3Fill,BsFillBookmarkStarFill,BsFillBriefcaseFill,} from "react-icons/bs";
// import { IoDocumentsSharp,IoNewspaperOutline } from "react-icons/io5";
// import { RiFileUserFill } from "react-icons/ri";
// import { FaUserFriends } from "react-icons/fa";
// import { TfiAnnouncement } from "react-icons/tfi";
// import { RxClipboardCopy } from "react-icons/rx";
// import { SiAdobepremierepro } from "react-icons/si";
// import { BsGlobe} from "react-icons/bs";
// import {IoLayersSharp } from "react-icons/io5";
// import { RiBarChartFill } from "react-icons/ri";
// import { GoOrganization } from "react-icons/go";
// import { GiReturnArrow } from "react-icons/gi";
// import { AiOutlineUsergroupAdd } from "react-icons/ai";
// import { BsFillCalendar2CheckFill } from "react-icons/bs";
// import { FcMoneyTransfer,FcGallery } from "react-icons/fc";


const Headercomponent = (props:any) => {
 console.log(props.siteabsUrl);
 const tenantSiteUrl = props.context.pageContext.site.absoluteUrl;
 // Use the tenantSiteUrl variable here in your web part
 console.log("Tenant Site URL:", tenantSiteUrl);
  // const Sidebar = () => {
    // const DevItems:any[]=[{icon:<TbFileInvoice/>,title:'Home'},{icon:<TbQuote/>,title:"Projects & Clients"},{icon:<TbFileInvoice/>,title:"Human Resources"},{icon:<TbFileInvoice/>,title:"Administration"},{icon:<TbFileInvoice/>,title:"Sales & Marketing "},{icon:<TbFileInvoice/>,title:"Finance"},{icon:<TbFileInvoice/>,title:"Learning Management"},{icon:<TbFileInvoice/>,title:"ZEA"},{icon:<TbFileInvoice/>,title:"About"}]
    // const SAMItems:any[] = [{icon:<TbFileInvoice/>,title:'Invoice'},{icon:<TbQuote/>,title:"Quotation"},{icon:<TbFileInvoice/>,title:"Sale Order"},{icon:<TbFileInvoice/>,title:"Customer"},{icon:<TbFileInvoice/>,title:"Products"},{icon:<TbFileInvoice/>,title:"Purchase Order"},{icon:<TbFileInvoice/>,title:"Purchase Bill"},{icon:<TbFileInvoice/>,title:"Debit Note"},{icon:<TbFileInvoice/>,title:"Credit Note"}];
    // const HRItems:any[] = [{icon:<BsFillDiagram3Fill/>,title:"Job Opening"},{icon:<BsFillBookmarkStarFill/>,title:"HR Document"},{icon:<BsFillBriefcaseFill/>,title:"Employee Details"},{icon:< IoDocumentsSharp/>,title:"Announcements"},{icon:<IoNewspaperOutline/>,title:"News"},{icon:<RiFileUserFill/>,title:"HolidaYS List"},{icon:< FaUserFriends/>,title:"Organization Tree"},{icon:<BsFillDiagram3Fill/>,title:"HR Feedback"},{icon:<TfiAnnouncement />,title:"Star Of The Month"}]
    // const PCItems:any[] = [{icon:<RxClipboardCopy/>,title:"Client Details"},{icon:<SiAdobepremierepro/>,title:"Project Details"},{icon:<BsGlobe/>,title:"Wikipedia Library"}];
    // const AItems:any[] =[{icon:<IoLayersSharp/>,title:"Inventory"},{icon:<RiBarChartFill/>,title:"Stock Availability"},{icon:<GoOrganization/>,title:"Consumed List"},{icon:<GiReturnArrow/>,title:"Return Stock"}];
    // const ZEAItems:any[] =[{icon:<AiOutlineUsergroupAdd/>,title:"ZEA Members"},{icon:<BsFillCalendar2CheckFill/>,title:"ZEA Events"},{icon:<FcMoneyTransfer/>,title:"ZEA Fund Details"},{icon:<FcGallery/>,title:"ZEA Library"}];
    const navItems:any[] = [{title: "Home",site:"Dev",realsitename:"Dev"},{title: "Projects & clients",site:"ProjectsClients",realsitename:"Projects & Clients"},{title: "Human Resources",site:"HRM",realsitename:"HR"},{title: "Administration",site:"Admin",realsitename:"Administration"},{title: "Sales and Marketing",site:"SalesMarketing",realsitename:"Sales & Marketing"},{title: "Finanace",site:"finance",realsitename:"Finanace"},{title: "Learning Management",site:"LearingManag",realsitename:"Learning Management"},{title: "ZEA",site:"ecocult",realsitename:"ZEA"}] 

    // const baseURL = 'https://24cl8t.sharepoint.com/sites/Dev/';
    const renderSwitch = (param:any) =>{
      console.log(param);
      
      switch(props.sitename){
        case param.realsitename:return(
          param.realsitename==="Dev"?
          //  <a   href={`https://24cl8t.sharepoint.com/sites/${param.site}`}><div className ="navItemActive" >{param.title}</div></a>:
          //  <a   href={`https://24cl8t.sharepoint.com/sites/Dev/${param.site}`}><div className ="navItemActive" >{param.title}</div></a>
          <div className ="navItemActive"  onClick={()=> window.open(`https://24cl8t.sharepoint.com/sites/${param.site}`,"_self")} >{param.title}</div>:
          <div className ="navItemActive"  onClick={()=> window.open(`${props.siteabsUrl}${param.site}`,"_self")} >{param.title}</div>
          )
      
        default:return(
          param.realsitename==="Dev"?
          // <a href={`https://24cl8t.sharepoint.com/sites/${param.site}`}  target={"_blank"} ><div className ="navItem" >{param.title}</div></a>:
          // <a href={`https://24cl8t.sharepoint.com/sites/Dev/${param.site}`} target={"_blank"}><div className ="navItem" >{param.title}</div></a>
          <div className ="navItem"  onClick={()=> window.open(`https://24cl8t.sharepoint.com/sites/${param.site}`,"_self")} >{param.title}</div>:
          <div className ="navItem"  onClick={()=> window.open(`${props.siteabsUrl}${param.site}`, "_blank")} >{param.title}</div>

        )
        
      }
    }

  // const renderSwitch = (param:any) =>{
  //   switch(param){
  //         case "Sales & Marketing":
  //           return(
  //             SAMItems.map((x:any)=>{
  //                   return(
  //                     <div className="menuitem"><div className='sidebaritemicon'><a href='' className='sidebaritem'>{x.icon}{x.title}</a></div></div>
  //                   )
  //             })
  //           )
  //           case "HR":
  //             return(
  //               HRItems.map((x:any)=>{
  //                 return (
  //                   <div className="menuitem"><div className='sidebaritemicon'><a href='' >{x.icon}{x.title}</a></div></div>
  //                 )
  //               })
  //             )
  //             case "Projects & Clients":
  //               return(
  //                 PCItems.map((x:any)=>{
  //                   return(
                      
  //                     <div className='menuitem'><div className='sidebaritemicon'><a href='' >{x.icon}{x.title}</a></div></div>
  //                   )
  //                 })
  //               )
  //               case "Administration":
  //               return(
  //                 AItems.map((x:any)=>{
  //                   return(
                      
  //                     <div className='menuitem'> <div className='sidebaritemicon'><a href='' >{x.icon}{x.title}</a></div></div>
  //                   )
  //                 })
  //               )
  //               case "ZEA":
  //               return(
  //                 ZEAItems.map((x:any)=>{
  //                   return(
                      
  //                     <div className='menuitem' > <div className='sidebaritemicon'><a href='' >{x.icon}{x.title}</a></div></div>
  //                   )
  //                 })
  //               )
  //               case "Dev":
  //                 return(
  //                   DevItems.map((x:any)=>{
  //                     return(
  //                       <div className='menuitem' ><div className='sidebaritemicon'><a href='' >{x.icon}{x.title}</a></div></div>
  //                     )
  //                   })
  //                 )

  //   }
  // }



    // React.useEffect(()=> {
    //   let handler = (e: { target: any; }) =>
    //   {
    //     // if(!menuRef.current.contains(e.target)){
    //       if (isMenuOpen && ref.current && !ref.current.contains(e.target)) {
    //         setIsMenuOpen(true);
    //         setSbState(false)
    //       }
    //     //  setCurrUrl(props.url)
    //     //  console.log(currUrl);
         
    //     // }
    //   };
    //    document.addEventListener("mousedown", handler);

    //    return() =>{
    //     document.removeEventListener("mousedown",handler);
    //    }
    // });
    // const ref = React.useRef<any>()

 

    // let yellow = '#ffc800';
    // const [bgColor, setBgColor] = React.useState(yellow);
    //  const changeColor =()=>{
    //     let purple = '#A020F0';
    //     setBgColor(purple);
    //   }
    
    const[sbState, setSbState] = React.useState<any>(false)

    let wrapperRef = React.useRef(null);




    //const [isMenuOpen, setIsMenuOpen] = React.useState<any>(false)
    // const[currUrl, setCurrUrl] = React.useState<any>();
    // let isMenuOpen = React.useRef();
    //const ref = React.useRef<any>()

    // React.useEffect(()=>{
    //   const handler = (e:MouseEvent)=>{
    //     if(!menuref.current.contains(e.target)){
    //       setSbState(false)
    //       console.log(menuref.current);
           
    //     }
    //   }
    //   document.addEventListener("mousedown",handler)
    //   return(
    //     document.removeEventListener("mousedown",handler)
    //   )
    // })
    // const handleClickOutside = event => {
    //   if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
    //     setIsVisible(false);
    //   }
    // };
  

    React.useEffect(()=>{
      const checkifclickedoutside = (event:MouseEvent) =>{
        if(
          sbState&&
            wrapperRef.current&&
            !wrapperRef.current.contains(event.target)
        ){
          setSbState(false)
        }
      }
      document.addEventListener("mousedown",checkifclickedoutside);
      return()=>{
        document.removeEventListener("mousedown",checkifclickedoutside)
      }
    },[sbState])

  React.useEffect(()=>{
      // setCurrUrl(props.url);
      console.log(props.sitename);
      
  },[])
  return (
    <>
<div className={sbState?'menubar':'menubarclose'} ref={wrapperRef}  >
    {props.items&&props.items?.map((x:any)=>{
        return(
          <a href={x.url} ><div className="menuitem" >
          {/* <div className="menuicon"><BsFillBriefcaseFill size={20} color='white'/></div> */}
          <a href={x.url}>{x.title}</a>
        </div></a>
        )
        
    })}
{/* {renderSwitch(props.sitename)} */}
  {/* <div className="menuitem">
    <div className="menuicon"><BsFillBriefcaseFill size={20} color='white'/></div>
    <a href=''>Job Openings</a>
  </div>
  <div className="menuitem">
    <div className="menuicon"><IoDocumentsSharp size={20} color="white"/></div>
    <a href=''>HR Documents</a>
  </div>
  <div className="menuitem">
    <div className="menuicon"><FaUserFriends  size={20} color="white"/></div>
    <a href=''>Employee Details</a>
    
  </div>
  <div className="menuitem">
    <div className="menuicon"><TfiAnnouncement size={20} color="white"/></div>
    <a href=''>Announcements</a>
    
  </div>
  <div className="menuitem">
    <div className="menuicon"><IoNewspaperOutline size={20} color="white"/></div>
    <a href=''>News</a>
    
  </div> */}
  {/* <div className="menuitem">
    <div className="menuicon"><BsFillCalendarCheckFill size={20} color='white'/></div>
    <a href=''>Holidays List</a>
    
  </div> */}
  {/* <div className="menuitem">
    <div className="menuicon"><BsFillDiagram3Fill size={20} color='white'/></div>
    <a href=''>Organization Tree</a>
    
  </div>
  <div className="menuitem">
    <div className="menuicon"><RiFileUserFill size={20} color='white'/></div>
    <a href=''>HR Feedback</a>
    
  </div>
  <div className="menuitem">
    <div className="menuicon"><BsFillBookmarkStarFill size={20} color='white'/></div>
    <a href=''>Star Of The Month</a>
    
  </div> */}
</div>
{/* 
Another nav bar */}
 

    <div className='Navbars' style={{backgroundImage:`url(${props.siteabsUrl}/SiteAssets/New%20Project.png)`}}>
                  <div className="profile" >
            <img src={props.url} alt="Profilepic"/>
                <div className = "profiledetails">
                <p>{props.greet},</p>
                <p>{props.user}...</p> 
                </div>
                
            </div>
           <div className="imgscroll">
           <Marquee>
           <div className="container" >
              <div className="img2"><img src ={`${props.siteabsUrl}/SiteAssets/image1-removebg-preview.png`}/></div>
              <div className="img2"><img src ={`${props.siteabsUrl}/SiteAssets/Devops-removebg-preview.png`}/></div>
              <div className="img2"><img src ={`${props.siteabsUrl}/SiteAssets/image3-removebg-preview.png`}/></div>
              <div className="img2"><img src ={`${props.siteabsUrl}/SiteAssets/image4-removebg-preview.png`}/></div>
              <div className="img2"><img src ={`${props.siteabsUrl}/SiteAssets/Data_Integration-removebg-preview.png`}/></div>
              <div className="img2"><img src ={`${props.siteabsUrl}/SiteAssets/projectengineering-removebg-preview-removebg-preview.png`}/></div>
              <div className="img2"><img src ={`${props.siteabsUrl}/SiteAssets/open_policy_agent-removebg-preview.png`}/></div>
           {/* <div className="img2"><img src ={`${props.uri}/sites/${props.sitename}/SiteAssets/image1-removebg-preview.png`}/></div>
           <div className="img2"><img src ={`${props.uri}/sites/${props.sitename}/SiteAssets/Devops-removebg-preview.png`}/></div>
           <div className="img2"><img src ={`${props.uri}/sites/${props.sitename}/SiteAssets/image3-removebg-preview.png`}/></div>
           <div className="img2"><img src ={`${props.uri}/sites/${props.sitename}/SiteAssets/image4-removebg-preview.png`}/></div>
           <div className="img2"><img src ={`${props.uri}/sites/${props.sitename}/SiteAssets/Data_Integration-removebg-preview.png`}/></div>
           <div className="img2"><img src ={`${props.uri}/sites/${props.sitename}/SiteAssets/projectengineering-removebg-preview-removebg-preview.png`}/></div>
           <div className="img2"><img src ={`${props.uri}/sites/${props.sitename}/SiteAssets/open_policy_agent-removebg-preview.png`}/></div> */}
           </div>
           </Marquee>
          
            </div>
            <img className="img1" src="https://24cl8t.sharepoint.com/sites/Dev/SiteAssets/Zelarlogo.png" alt="Logo"></img>
          
     
</div>
     <div className="topnav">
      
     <ul>
       <li>
      
     <div className="navList" >

    
     <div className="navItem" onClick={()=>setSbState(!sbState)}><a href=""></a><CgMenuGridO size={20}/></div>
    {
      navItems.map((x:any)=>{ 
        return(
          renderSwitch(x)
        )
       
        
      // if(x.site=="Dev"){
      //   return(<div className ="navItem" ><a   href={`https://24cl8t.sharepoint.com/sites/${x.site}`} target="_blank" rel="noopener noreferrer"  >{x.title}</a></div>)
      // }
      // return(<div className ="navItem" ><a   href={`https://24cl8t.sharepoint.com/sites/Dev/${x.site}`}  target="_blank" rel="noopener noreferrer">{x.title}</a></div>)
        
      //   else
      //   {
          
      // if(x.site=="Dev"){
         //return(<div className ="navItem" ><a href={`https://24cl8t.sharepoint.com/sites/${x.site}`}>{x.title}</a></div>)
      // }
      //return(<div className ="navItem" ><a href={`https://24cl8t.sharepoint.com/sites/Dev/${x.site}`}>{x.title}</a></div>)

      //   }


      // if(x.site=="Dev"){
      //   return(<div className ="navItem" ><a href={`https://24cl8t.sharepoint.com/sites/${x.site}`}>{x.title}</a></div>)
      // }
      // return(<div className ="navItem" ><a href={`https://24cl8t.sharepoint.com/sites/Dev/${x.site}`}>{x.title}</a></div>)



      //  if(props.sitename==x.site){

      //   if(props.sitename=="Dev"){
      //     return(
      //       <div className ="navItemActive" ><a href='https://24cl8t.sharepoint.com/sites/'>{x.title}</a></div>
      //     )
      //   }
      //   if(x.title=="Home")
      //   {
      //     return(
      //       <div className ="navItemActive" ><a href={`https://24cl8t.sharepoint.com/sites/${x.site}`}>{x.title}</a></div>
      //     ) 
      //   }
      //   return(
      //     <div className ="navItemActive" ><a href={`https://24cl8t.sharepoint.com/sites/Dev/${x.site}`}>{x.title}</a></div>
      //   )
      //  }
      //   else{
      //       return(
      //        <div className ="navItem" ><a href={`https://24cl8t.sharepoint.com/sites/Dev/${x.site}`}>{x.title}</a></div>
      //       )
      //   }
       
      })
    }  
     {/* <div className="navItem"><a href="https://24cl8t.sharepoint.com/sites/Dev/SitePages">Home</a></div> */}
     {/* <div className="navItem" ><a href=" https://24cl8t.sharepoint.com/sites/Dev/ProjectsClients" target="_blank">Projects & clients</a></div>
     <div className ="navItem" ><a href="https://24cl8t.sharepoint.com/sites/Dev/HRM" target="_blank">Human Resources</a></div>
     <div className ="navItem" ><a href=" https://24cl8t.sharepoint.com/sites/Dev/Admin" target="_blank">Administration</a></div>
     <div className ="navItem" ><a href="https://24cl8t.sharepoint.com/sites/Dev/Sa" > Sales & Marketing</a></div>
     <div className ="navItem" ><a href="https://24cl8t.sharepoint.com/sites/Dev/Finance" target="_blank">Finanace</a></div>
     <div className ="navItem" ><a href="https://24cl8t.sharepoint.com/sites/Dev/LearingManag" target="_blank">Learning management</a></div>
     <div className ="navItem" ><a href="https://24cl8t.sharepoint.com/sites/Dev/EcoCult" target="_blank">ZEA</a></div> */}
     {/* <div className ="navItem"><a href="https://zelarsoft.com/">About</a></div> */}
      </div>
      
     </li>
     </ul> 
     {/* <div className="search">
     <input type="text" placeholder="Search..."/>
     <div className="icon">
    <AiOutlineSearch size={20} color='black'/>
     </div>
     </div> */}
<div className="searchBardiv" >
  <form action="/_layouts/15/search.aspx/All" method="get">
 <input type="text" placeholder="Search.." name="q"/>
</form>
<button className='submitbtn' type="submit"  ><a target="_blank"><AiOutlineSearch size={15}/></a></button>
</div>

</div>

</>
  )
}


export default Headercomponent