import React, { useEffect, useState } from 'react'
import { Box, Typography, Grid, styled, Paper, Category, Stack, CategoryTitle, Breadcrumbs } from '@mui/material';
// import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { Link } from "react-router-dom";
import axios from 'axios';


const CategoryPage = () => {

    const [input, setInput] = useState("")
    const [data, setData] = useState([])
    const [up, setup] = useState(false)

 // console.log(input);

    const soham = window.localStorage.getItem("key");
    
    // console.log(soham);

  const kye ="a1724383754372vcg718295647ex"

    const get = () => {

        axios.get("https://service.apikeeda.com/api/v1/category",

            {
                headers: {
                    "x-apikeeda-key": kye,
                    "authorization": soham
                }
            }
        )
            .then((aa) => {
                setData(aa.data.data);

            }).catch((arror) => {
                console.log(arror);

            })
    }

    useEffect((values) => {
        get();
    }, [])

    function postdata() {
        axios.post("https://service.apikeeda.com/api/v1/category", { "name": input },
            {
                headers: {
                    "x-apikeeda-key": kye,
                    "authorization": soham
                }
            }
        )
            .then((ss) => {
                console.log(ss);
                get();

            }).catch((arry) => {
                console.log(arry);

            })
    }

    const delet = (id) => {
        axios.delete(`https://service.apikeeda.com/api/v1/category/${id}`,
            {
                headers: {
                    "x-apikeeda-key":  kye,
                    "authorization": soham
                }
            }
        ).then((kkk) => {
            console.log(kkk);
            get()

        })
            .catch((ar) => {
                console.log(ar);

            })
    }
    const update = () => {
        axios.patch(`https://service.apikeeda.com/api/v1/category/${up}`, { "name": input },
            {
                headers: {
                    "x-apikeeda-key":  kye,
                    "authorization": soham
                }
            }
        )
            .then((ss) => {
                get();
                setup(false)
                setInput("")

            }).catch((arry) => {
                console.log(arry);
            })
    }
    const serch = (e) => {
        console.log(e);
        axios.get(`https://service.apikeeda.com/api/v1/category/search?search=${e}`,
            {
                headers: {
                    "x-apikeeda-key":  kye,
                    "authorization": soham
                }
            }
        )
            .then((aa) => {
                setData(aa.data.data);
            }).catch((arror) => {
                console.log(arror);
            })

    }

    return (
        <Box>
            <Typography variant="h5" marginBottom="5px">
                category
            </Typography>
            <Breadcrumbs aria-label="breadcrumb" marginBottom="30px">
                <Link className="Breadcrumb" style={{ color: "#899bbd", fontSize: "14px", textDecoration: "none" }} to="/">
                    Home
                </Link>
                <Typography color="#899bbd" fontSize="14px">Components</Typography>
                <Typography color="#273246" fontSize="14px">  Category</Typography>
            </Breadcrumbs>



            <input className='input' onChange={(e) => {
                // console.log(e.target.value);
                setInput(e.target.value)


            }} type="text" value={input} />
            <button onClick={(() => {

                !up ? postdata() : update();

            })}>


{!up ? "+ADD" : "update"}</button>


            <input type="text" onChange={(e) =>serch(e.target.value)} className='input' />



            <table border={"2px"} className='ta'>

                {data.map((values) => (
                    <Box>
                        <tr className='main'>
                            <td className='ss' style={{width:"45%"}} >{values._id}</td>
                            <td className='ss' style={{width:"45%"}}>{values.name}</td>
                            <div className='div'>
                            <button className='btn1' onClick={(() => { delet(values._id) })}>delet</button>
                            <button className='btn2' onClick={() => {
                                setup(values._id)
                                setInput(values.name)
                            }}>update</button>
                            </div>
                        </tr>
                    </Box>
                ))}
            </table>

        </Box>
    )
}

export default CategoryPage;