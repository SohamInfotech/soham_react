import React, { useEffect, useState } from 'react';
import { Box, Typography, Grid, styled, Paper, Accordion, AccordionActions, AccordionSummary, AccordionDetails, Button, Breadcrumbs } from '@mui/material';
import { Link } from "react-router-dom";
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import axios from 'axios';
import TextField from '@mui/material/TextField';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
}));







function AccordionPage() {
    const [category, setcategory] = useState('');
    const [data, setData] = useState([])
    const [soham1, setSoham1] = useState({ imgURL: "", title: "", category: "", description: "" })
    const [value, setValue] = useState([])
    const [up, setUP] = useState(false)
    const handleChange = (event) => {
        setcategory(event.target.value);
    };
    useEffect(() => {
        setSoham1({ ...soham1, "category": category })
    }, [category])




    const kye = "a1724383754372vcg718295647ex"
    const soham = window.localStorage.getItem("key");

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


    useEffect(() => {
        get();
    }, [])

    const handle = (e) => {
        setSoham1({ ...soham1, [e.target.name]: e.target.value })

        // soham1()

        console.log(e.target.value);
    }

    const getdata = () => {
        axios.get("https://service.apikeeda.com/api/v1/blog",
            {
                headers: {
                    "x-apikeeda-key": kye,
                    "authorization": soham
                }
            }
        )
            .then((res) => {
                console.log(res.data.data);
                setValue(res.data.data)

            })
            .catch((ar) => {
                console.log(ar);

            })
    }

    const postdata = () => {
        console.log(
            soham1
        );

        axios.post("https://service.apikeeda.com/api/v1/blog", soham1,
            {
                headers: {
                    "x-apikeeda-key": kye,
                    "authorization": soham
                }
            }
        )
            .then((res) => {
                console.log(res.data.data);
                getdata()

            })
            .catch((ar) => {
                console.log(ar);

            })
    }
    const delettt = (id) => (
        axios.delete(`https://service.apikeeda.com/api/v1/blog/${id}`,
            {
                headers: {
                    "x-apikeeda-key": kye,
                    "authorization": soham
                }
            }
        )
            .then((res) => {
                console.log(res);
                getdata()

            })
            .catch((ar) => {
                console.log(ar);

            })
    )
console.log(up);

    const update = () => {
        axios.patch(`https://service.apikeeda.com/api/v1/blog/${up}`,soham1,
            {
                headers: {
                    "x-apikeeda-key": kye,
                    "authorization": soham
                }
            }
        )
            .then((res) => {
                console.log(res);
                getdata()
                setUP(false)

            })
            .catch((ar) => {
                console.log(ar);

            })
    }

    useEffect(() => {
        getdata()
    }, [])
    return (
        <Box>
            <Typography variant="h5"  >
                Accordion
            </Typography>
            <Breadcrumbs aria-label="breadcrumb" marginBottom="30px">
                <Link className="Breadcrumb" style={{ color: "#899bbd", fontSize: "14px", textDecoration: "none" }} to="/">
                    Home
                </Link>
                <Typography color="#899bbd" fontSize="14px">Components</Typography>
                <Typography color="#273246" fontSize="14px">Accordion</Typography>
            </Breadcrumbs>

            <Box >

                <FormControl sx={{ width: "20%" }} >
                    <InputLabel id="demo-simple-select-label">catagory</InputLabel>

                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={soham1.category}
                        label="catagory"
                        onChange={handleChange}>

                        {data.map((Item) => (
                            <MenuItem value={Item._id}> {Item.name}</MenuItem>
                        ))}
                    </Select>


                </FormControl>

                <TextField onChange={handle}
                    id="outlined-multiline-flexible"
                    label="img url"
                    name='imgURL'
                    maxRows={4}
                    value={soham1.imgURL}
                />
                <TextField onChange={handle}
                    id="title"
                    label="title"
                    name="title"
                    maxRows={4}
                    value={soham1.title}
                />
                <TextField onChange={handle}
                    id="description"
                    label="description"
                    name="description"
                    maxRows={4}
                    value={soham1.description}
                />
                <button onClick={() => {
                    // postdata()

                    !up ? postdata() : update();

                }}>{!up ? "ADD" : "update"}</button>



            </Box>

            <table border={"2px solid black"} >
                {value.map((s) => (
                    <div  >
                        <tr>
                            <td width={"20%"}>
                                {s.imgURL}
                            </td>
                            <td width={"20%"}>
                                <img src={s.imgURL} alt="" width={"100%"} />
                            </td>
                            <td width={"20%"}>
                                {s.title}
                            </td>
                            <td width={"20%"}>
                                {s.description}
                            </td>
                            <td width={"20%"}>
                                <button onClick={() => (
                                    delettt(s._id)
                                )}>delet</button>
                            </td>

                            <td>
                                <button onClick={() => {
                                    setUP(s._id)
                                    setSoham1({ imgURL: s.imgURL, title: s.title, category: s.category, description: s.description })
                                }}>update</button>

                            </td>

                        </tr>

                    </div>
                ))}
            </table>

        </Box >
    )
}

export default AccordionPage;