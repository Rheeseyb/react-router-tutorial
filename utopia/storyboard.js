import * as React from 'react'
import { Scene, Storyboard } from 'utopia-api'
import {
  createMemoryRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Link,
  Outlet,
} from 'react-router-dom'

const Clicky = () => {
  return (
    <div
      data-uid='clicky-root'
      style={{ width: '100%', height: '100%' }}
    >
      <Link
        to={`contacts/1`}
        data-uid='link'
        style={{ width: '100%', height: '100%' }}
      >
        Clicky
      </Link>
      <div data-uid='outlet-div'>
        <Outlet data-uid='outlet' />
      </div>
    </div>
  )
}

const Hello = () => {
  return (
    <div
      style={{
        width: '100',
        height: '200',
        backgroundColor: 'white',
      }}
      data-uid='hello-root'
    >
      Hello!
    </div>
  )
}

const Error404 = () => {
  return <div data-uid='error-root'>404!</div>
}

const App = () => {
  return (
    <RouterProvider
      router={createMemoryRouter(
        createRoutesFromElements(
          <Route
            path='/'
            element={<Clicky data-uid='clicky' />}
            errorElement={
              <Error404 data-uid='error-element' />
            }
            data-uid='route1'
          >
            <Route
              path='contacts/:id'
              element={<Hello />}
              data-uid='route2'
            />
          </Route>,
        ),
        {
          initialEntries: ['/', '/contacts/1'],
          initialIndex: 1,
        },
      )}
      data-uid='router-provider'
    />
  )
}

export var storyboard = (
  <Storyboard data-uid='sb'>
    <Scene
      style={{
        width: 400,
        height: 800,
        position: 'absolute',
        left: 0,
        top: 0,
      }}
      data-label='Playground'
      data-uid='scene'
    >
      <App data-uid='app' />
    </Scene>
  </Storyboard>
)
