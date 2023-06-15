import React, { useEffect, useState } from 'react'
import dummyprofile from '../../Assets/profile4.jpg'
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getExpertsToPerticularDomain, getSingleDomain, getSubTutorials, getTutorials } from '../../Axios/Services/ClientServices';

function DomainView({setTitle}) {
  const [isOpen, setIsOpen] = useState('');
  const [Domain, setDomain] = useState('')
  const [Tutorials, setTutorials] = useState([])
  const [SubTutorials, setSubTutorials] = useState([])
  const [Content,setContent] = useState([])
  const [Experts,setExperts] = useState([])
  const [Rating,setRating] = useState([])

  const [color,setColor] = useState('')


  const token = useSelector(state => state.ClientReducer.accessToken)

  const { domain_name } = useParams()
  setTitle(domain_name)

  useEffect(() => {

    let domain;

    const fetchSingleDomain = async () => {
      const response = await getSingleDomain(token, domain_name)
      if (response) {
        domain = response?.payload
        setDomain(response?.payload)
      }
    }
    fetchSingleDomain()

    const fetchTutorials = async () => {
      const response = await getTutorials(token)
      if (response) {
        const filter = response?.payload?.filter((item) => item.domain_id === domain?.id)
        setTutorials(filter)  
      }
    }
    fetchTutorials()

    const fetchSubTutorials = async () => {
      const response = await getSubTutorials(token)
      if (response) {
        const filter = response?.payload?.filter((item) => item.domain_id === domain?.id)
        setSubTutorials(filter)
        setContent(filter)
        setIsOpen(filter[0]?.tutorial_id)
        setColor(filter[0]?.id) 
      }
    }
    fetchSubTutorials()

    const experts = async()=>{
      const response = await getExpertsToPerticularDomain(token, domain_name)
      if(response){
        setExperts(response?.payload)
        setRating(response?.rating)
      }
    }
    experts()




  }, [])

  

  const toggleDropdown = (id) => {
    if (isOpen === id) {
      setIsOpen('');
    } else {
      setIsOpen(id);
    }
  }


  const Descriptions = (id)=>{
      const filterd_sub = SubTutorials?.filter((desc)=>desc.id === id)
      if (filterd_sub){
        setContent(filterd_sub)
      }

  }
  const Select = (id)=>{
    setColor(id)

  }



  return (
    <>
      <div className='bg-black h-full w-full p-12 md:flex justify-around'>
        <div className='h-full   md:w-52 dropdown  bg-white pb-2'>
          <div className='bg-emerald-400 w-full p-2'>
            <p className='text-white font-extrabold text-lg text-center uppercase mb-2 mt-1'>Browse Tutorials</p>
          </div>


          {Tutorials?.map((item) => {
            return (
              <div>
                <div className='flex mt-1'>
                  <svg className="w-4 h-4 ml-3 mt-1" aria-hidden="true" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path d="M118.6 105.4l128 127.1C252.9 239.6 256 247.8 256 255.1s-3.125 16.38-9.375 22.63l-128 127.1c-9.156 9.156-22.91 11.9-34.88 6.943S64 396.9 64 383.1V128c0-12.94 7.781-24.62 19.75-29.58S109.5 96.23 118.6 105.4z" /></svg>
                  <h1 className="text-black cursor-pointer uppercase font-semibold ml-1 text-center align-middle" onClick={() => { toggleDropdown(item.id) }}>
                    {item.tutorial_name}
                  </h1>
                </div>
                {isOpen === item.id && (
                  <div className="dropdown-content">
                    <ul className="pl-4 mt-2 ml-7">
                      {SubTutorials?.length !== 0 && SubTutorials?.filter((sub) => sub.tutorial_id === item.id)
                        .map((val) => <li  onClick={() => {Descriptions(val.id)
                          Select(val.id)
                        }} className={color === val.id ? "text-blue-500 mt-1 cursor-pointer":"  text-black mt-1 cursor-pointer" } >{val.sub_tutorial_name}</li>)}
                    </ul>
                  </div>
                )}
              </div>


            )
          })}

        </div>


        <div className='bg-white h-[33rem] md:w-9/12 mt-5 md:mt-0 rounded-md text-center overflow-y-scroll no-scrollbar p-5'>
          <p className='text-black text-center font-extrabold text-2xl mb-4 uppercase'>{Content[0]?.sub_tutorial_name}</p>

          <p className='text-black font-serif text-md leading-6 text-start '>
          {Content[0]?.description}
          Regression analysis is another essential statistical technique. It examines the relationship between one dependent variable and one or more independent variables. Regression models help in understanding how changes in independent variables impact the dependent variable. This is useful for prediction, forecasting, and understanding causal relationships.
          Statistical inference and modeling often rely on probability theory. Probability is the measure of the likelihood of an event occurring. It provides a framework for quantifying uncertainty and making decisions in the presence of variability. Probability distributions, such as the normal distribution, binomial distribution, and exponential distribution, are used to model and analyze random variables.
          Data visualization is an integral part of statistics. Visual representations of data through charts, graphs, histograms, and scatter plots facilitate the exploration and understanding of patterns and relationships. Data visualization enhances the communication of statistical findings and helps in presenting complex information in a visually appealing and accessible manner.
          With the advent of technology, statistical analysis has become more efficient and accessible. Statistical software packages, such as R, Python (with libraries like NumPy, pandas, and matplotlib), and SPSS, provide powerful tools for data manipulation, analysis, and visualization. These tools have democratized the field of statistics, making it easier for researchers, analysts, and decision-makers to apply statistical techniques to their data.
          Statistics also plays a vital role in decision-making and policy formulation. It enables organizations to make evidence-based decisions, assess risks, evaluate interventions, and optimize processes. In fields like healthcare, statistics is crucial for clinical trials, epidemiological studies, and public health interventions. In finance and economics, statistics is used for risk analysis, portfolio management, and forecasting.
          
          </p>

        </div>


      </div>
      <div className=' h-full w-full bg-black'>
        <div className='bg-black'>
          {Experts.length !==0 ? <h1 className='text-white text-center font-extrabold text-3xl'>Clarify your doubts with industrial experts</h1> : <h1 className='text-white text-center font-extrabold text-3xl'>Currently we are looking for experts to this Domain</h1> }
          
        </div>

        <div className='h-full w-full mt-9 bg-black flex justify-around flex-wrap' >
          { Experts?.length !==0 ? Experts?.map((item)=>{
            return (

              <div className='m-6' >
              <div className='w-60 h-60 '>
                <img className='w-60 h-60 object-cover rounded-2xl' src={`http://127.0.0.1:8000/${item.profile_poto}`}  alt="profile_poto" />
              </div>
              <div className='w-60'>
                <h5 className="mt-2 text-center mb-1 text-xl font-medium uppercase text-white dark:text-white">{item.username}</h5>
                <p className="text-center text-sm text-gray-500 dark:text-gray-400">{item.domain}</p>
                  

                <div className="mx-20 mt-1 mr-4 w-28 flex  items-center">
                  { Rating?.length !== 0 && Rating?.filter((rat)=>rat.expert_id === item.id)?.map((val)=>{
                    let star = [];
                    for (let i = 1; i <= val.count; i++) {
                    star.push(<svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>)
                    }
                    console.log(star,'cfhg')
                    return star;
                  })}
                  </div>
              
          
            
                


              </div>
            </div>

            )
          }) : <div className='flex justify-around flex-wrap'> 
          <div className='m-6' >
          <div className='w-60 h-60 '>
            <img className='w-60 h-60 object-cover rounded-2xl' src={dummyprofile} alt="profile_poto" />
          </div>
          <div className='w-60'>
            <h5 className="mt-2 text-center mb-1 text-xl font-medium text-white dark:text-white">Sabeel</h5>
            <p className="text-center text-sm text-gray-500 dark:text-gray-400">Data Sciene</p>
          </div>
        </div>
        <div className='m-6' >
          <div className='w-60 h-60 '>
            <img className='w-60 h-60 object-cover rounded-2xl' src={dummyprofile} alt="profile_poto" />
          </div>
          <div className='w-60'>
            <h5 className="mt-2 text-center mb-1 text-xl font-medium text-white dark:text-white">Sabeel</h5>
            <p className="text-center text-sm text-gray-500 dark:text-gray-400">Data Sciene</p>
          </div>
        </div>
        <div className='m-6' >
          <div className='w-60 h-60 '>
            <img className='w-60 h-60 object-cover rounded-2xl' src={dummyprofile} alt="profile_poto" />
          </div>
          <div className='w-60'>
            <h5 className="mt-2 text-center mb-1 text-xl font-medium text-white dark:text-white">Sabeel</h5>
            <p className="text-center text-sm text-gray-500 dark:text-gray-400">Data Sciene</p>
          </div>
        </div>
        <div className='m-6' >
          <div className='w-60 h-60 '>
            <img className='w-60 h-60 object-cover rounded-2xl' src={dummyprofile} alt="profile_poto" />
          </div>
          <div className='w-60'>
            <h5 className="mt-2 text-center mb-1 text-xl font-medium text-white dark:text-white">Sabeel</h5>
            <p className="text-center text-sm text-gray-500 dark:text-gray-400">Data Sciene</p>
          </div>
        </div>
          </div> }
          

         
        </div>
      </div>
    </>
  )
}

export default DomainView