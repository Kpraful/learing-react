
// function Card(prop) {
//     return (
//       <>
//       {prop.data ? (
//           prop.data.map((v) => (
//               <div className='m-4 border ' key={v.id}>{v.title}</div> // Using v.id as the unique key for each post
//             ))
//         ) : (
//             <p>Loading...</p> // Display a loading message if prop.data is null or still loading
//         )}
//         </>
//   )
// }

function Card(prop) {
    return (
    <div>
        <div className='border shadow-lg border-black-900 h-[30vh] w-[15vw] rounded-lg overflow-hidden'>
            <div className='flex flex-col h-full'>
                <div className='h-[60%]'>
                    <img src={prop.url} alt="" style={{
                        width:"100%",
                        height:"100%",
                        objectFit:"cover"
                        }} />
                </div>
                {prop.id}
                {prop.title}
            </div>
        </div>

    </div>
  
  )
}


export default Card