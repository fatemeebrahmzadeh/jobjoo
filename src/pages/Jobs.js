import {Card, Grid} from "@mui/material";
import Test2 from "../components/test/Test2";
import './jobs.css'
import NavbarVertical from '../components/navbar/NavbarVertical'
import JobCard from "../components/jobCard/JobCard";

const Jobs = () =>{
    return(
        <Grid container spacing={8} justifyContent='center'>
            <Grid item xs={6}>
                <Card sx={{
                    width: '100%',
                    height: '62px',
                    marginTop:'44px',
                    marginBottom :'19px',
                    borderRadius: '15px',
                    border: '1px',
                    borderColor: 'rgba(112, 112, 112, 0.39)',
                    backgroundColor: '#fff',
                }}>
                    <Test2/>
                </Card>
                <Card sx={{
                    width: '100%',
                    height: '180px',
                    padding: '33px 20px 22px 39px',
                    marginTop :'11px',
                    borderRadius: '15px',
                    borderColor: 'rgba(112, 112, 112, 0.25)',
                    backgroundColor: '#fff'
                }}>
                    <JobCard/>
                </Card>
            </Grid>
            <Grid item xs={3}>
                <Card sx={{marginTop:'44px',height: '536px',
                    padding: '31px 16.4px 40px 21.5px',
                    borderRadius: '15px',
                    borderColor: 'rgba(112, 112, 112, 0.25)',
                    backgroundColor: '#fff'}}>
                    <NavbarVertical/>
                </Card>
            </Grid>
        </Grid>
    )
}
export default Jobs;