import * as React from 'react'
import { Scene, Storyboard } from 'utopia-api'
import { App } from '/src/app.js'
import { Playground } from '/src/playground.js'
import {
  createMemoryRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Link,
} from 'react-router-dom'

const router = createMemoryRouter(
  createRoutesFromElements(
    <>
      <Route
        path='/'
        element={<Link to={`contacts/1`}>Clicky</Link>}
        errorElement={<div>404!</div>}
      />
      <Route
        path='contacts/:contactId'
        element={<div>Hello</div>}
      />
    </>,
  ),
)

export var storyboard = (
  <Storyboard>
    <Scene
      style={{
        width: 400,
        height: 800,
        position: 'absolute',
        left: 0,
        top: 0,
      }}
      data-label='Playground'
    >
      <RouterProvider router={router} />
    </Scene>
  </Storyboard>
)
