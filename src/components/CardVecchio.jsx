// function Card(props){
 
//     function Card({title, imgURL, children, isVisited}){
//     // const visitedLabel = isVisited ? "✔ visitata" : "❌ non visitata"

//     // const title = props.title
//     // const description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo deserunt veritatis placeat."
//     // const imgURL = props.imgURL

//     // if(isVisited){
//     //     return (

//     //         <div className="rounded-md bg-zinc-950">
//     //            <img src={imgURL} alt="" ></img>
//     //            <div className="flex flex-col p-4">
//     //             <h2 className="text-2xl text-white font-bold">{title}</h2>
//     //             <p className="text-gray-500">
//     //                 {/* {description} */}
//     //                 {children}
//     //             </p> 
//     //             <span>✔ visitata</span>
                
//     //            </div>
//     //         </div>
//     //     )
//     // }else{
//     //     return (

//     //         <div className="rounded-md bg-zinc-950">
//     //            <img src={imgURL} alt="" ></img>
//     //            <div className="flex flex-col p-4">
//     //             <h2 className="text-2xl text-white font-bold">{title}</h2>
//     //             <p className="text-gray-500">
//     //                 {/* {description} */}
//     //                 {children}
//     //             </p> 
//     //             <span>❌ non visitata</span>
               
//     //            </div>
//     //         </div>
//     //     )
//     // }
//     return (

//         <div className="card">
//             {/* className="rounded-md bg-zinc-950" */}
//            <img src={imgURL} alt="" ></img>
//            <div className="flex flex-col p-4">
//             <h2 className="text-2xl text-white font-bold">{title}</h2>
//             <p className="text-gray-500">
//                 {/* {description} */}
//                 {children}
//             </p> 
//             {isVisited ? <span>✔ visitata</span> : <span>❌ non visitata</span>}

//             {/**
//              * <span>{isVisited ? "✔ visitata" : "❌ non visitata"}</span>
//              */}

//              {/**
//               * <span>{visitedLabel}</span>
//               */}

//               {/* 
//               {isVisited && <span>✔ visitata</span>}
//               {!isVisited && <span>❌ non visitata</span>}

//               */}
            
            
//            </div>
//         </div>
//     )
// }

// export default  Card;