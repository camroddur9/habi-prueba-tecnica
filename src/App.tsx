import React, {useState, useEffect} from 'react';
import { connect } from "react-redux";
import {HashRouter, Route, Routes} from 'react-router-dom'

import { stepsData } from './data/steps.data';

import {
  getStepsCount
} from './redux/actions'

import MainLayout from './components/layouts/container.layout';

interface Steps {
  stepNumber: number,
  route: string,
  component: string
  description: string,
  linkTo: string,
  amenitiesArray?: Array<String>
}

function App({getStepsCount, stepCount}: any) {

  const [currentData] = useState(stepsData())

  useEffect(() => {
    getStepsCount(currentData.steps.length)
  })

  return (
    <HashRouter>
      <Routes>
        {
          currentData.steps.map((step: Steps, index: number) => 
            <Route 
              key = {step.component + index}
              path={step.route}
              element = {
                <MainLayout 
                  step={step}
                  stepsCount={stepCount}
                />
              }
            />
          )
        }
      </Routes>
    </HashRouter>
  );
}

const mapStateToProps = ({
  layoutReducers
}: any) => {
  const {stepCount} = layoutReducers
  return {stepCount}
}

export default connect(mapStateToProps, {
  getStepsCount
})(App);
