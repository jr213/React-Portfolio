import bookfinder from './images/bookfinder.PNG'
import notetaker from 'src/images/notetake.PNG'
import skriptz from 'src/images/skriptz.PNG'
import scheduler from 'src/images/scheduler.PNG'
import {
    MDBFooter,
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBIcon,
    MDBBtn
  } from 'mdb-react-ui-kit';
export default function Projects(){
    return (
        <div className='portContainer'>
            <h2 className='text-center'>Projects</h2>
        <div class="row row-cols-1 row-cols-md-3 g-4">
  
  
  <div className="col">
    <div className="card h-100">
      <img src={skriptz} class="card-img-top" alt="Picture of Skriptz app" />
      <div className="card-body">
        <h5 className='portTitle'><a className="portfolioLink card-title" target="_blank" href='https://github.com/jr213/Skriptz'>Skriptz</a>
        <MDBBtn outline color="white" floating className='m-1' target="_blank" href='https://github.com/jr213/Skriptz' role='button'>
            </MDBBtn></h5>
        <p className="card-text text-center">Skrips is a application that allows the user to manage their subscriptions. This app allows you to see how much you spend on all of your monthly subscriptions.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src={scheduler} class="card-img-top" alt="Picture of workday scheduler app." />
      <div className="card-body">
        <h5 className='portTitle'><a className="portfolioLink card-title" target="_blank" href='https://github.com/jr213/workday-scheduler'>Workday Scheduler</a>
        <MDBBtn outline color="white" floating className='m-1' target="_blank" href='https://github.com/jr213/workday-scheduler' role='button'>
\            </MDBBtn></h5>
        <p className="card-text text-center">This application allows the user to plan out their day. The user has the option to add or delete tasks.  </p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src={bookfinder} class="card-img-top" alt="Picture of bookfinder app" />
      <div className="card-body">
        <h5 className='portTitle'><a className="portfolioLink card-title" target="_blank" href='https://github.com/jr213/Book-Search-Engine'>BookFinder</a>
        <MDBBtn outline color="white" floating className='m-1' target="_blank" href='https://github.com/jr213/Book-Search-Engine' role='button'>
            </MDBBtn></h5>
        <p className="card-text text-center"></p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src={notetaker} class="card-img-top" alt="Picture of note taker app" />
      <div className="card-body">
        <h5 className='portTitle'><a className="portfolioLink card-title" target="_blank" href='https://github.com/jr213/Note-Taker'>Note Taking app</a>
        <MDBBtn outline color="white" floating className='m-1' target="_blank" href='https://github.com/jr213/Note-Taker' role='button'>
            </MDBBtn></h5>
        <p className="card-text text-center">This application allows the user to take notes and save them for later. The user can add delete notes and view these notes on one side of the page.</p>
      </div>
    </div>
  </div>
</div>
</div>

  )
}