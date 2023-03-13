import Grid from '@mui/material/Grid';
import React,{Component} from 'react';
import ClassCard from './ClassCard';
import ClassNavBar from './ClassNavBar';
import AppBar from '@mui/material/AppBar';

class ClassCardGrid extends Component
{
    render()
    {
        return (
           
            <div>
            <Grid container direction="row" justifyContent="space-around" alignItems="center" spacing={2}>
                <div className='mt-5'>
                <Grid className='m-2'>
                    <ClassCard classTitle="Software Engineering" classImg="https://gstatic.com/classroom/themes/img_code.jpg" classQuote="AKP / HBP"/>
                </Grid> 
                </div>
                <div className='mt-5'>
                <Grid className='m-2'>
                    <ClassCard classTitle="Design Patterns" classImg="https://gstatic.com/classroom/themes/Honors.jpg" classQuote="HBP / FMV"/>
                </Grid> 
                </div>
                
                <div className='mt-5'>
                <Grid className='m-2'>
                    <ClassCard classTitle="Software Engineering" classImg="https://gstatic.com/classroom/themes/img_learnlanguage.jpg" classQuote="AKP / HBP"/>
                </Grid> 
                </div>
                <div className='mt-5'>
                <Grid className='m-2'>
                    <ClassCard classTitle="Design Patterns" classImg="https://gstatic.com/classroom/themes/Chemistry.jpg" classQuote="HBP / FMV"/>
                </Grid> 
                </div><div className='mt-5'>
                <Grid className='m-2'>
                    <ClassCard classTitle="Software Engineering" classImg="https://gstatic.com/classroom/themes/img_reachout.jpg" classQuote="AKP / HBP"/>
                </Grid> 
                </div>
                <div className='mt-5'>
                <Grid className='m-2'>
                    <ClassCard classTitle="Design Patterns" classImg="https://gstatic.com/classroom/themes/img_code.jpg" classQuote="HBP / FMV"/>
                </Grid> 
                </div><div className='mt-5'>
                <Grid className='m-2'>
                    <ClassCard classTitle="Software Engineering" classImg="https://gstatic.com/classroom/themes/img_code.jpg" classQuote="AKP / HBP"/>
                </Grid> 
                </div>
                <div className='mt-5'>
                <Grid className='m-2'>
                    <ClassCard classTitle="Design Patterns" classImg="https://gstatic.com/classroom/themes/img_code.jpg" classQuote="HBP / FMV"/>
                </Grid> 
                </div>

            </Grid>
            </div>
        );
    }
}

export default ClassCardGrid;
