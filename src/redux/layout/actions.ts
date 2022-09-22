import {
    CURRENT_STEP,
    STEPS_COUNT
} from '../actions'

export const setCurrentStep = (stepNumber: number) => ({
    type: CURRENT_STEP,
    payload: stepNumber
})

export const getStepsCount = (stepCount: number) => ({
    type: STEPS_COUNT,
    payload: stepCount
})