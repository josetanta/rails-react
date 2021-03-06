import React, { Fragment } from 'react';
import { BrowserRouter ,Route, Switch} from 'react-router-dom'
import { Container } from 'react-bootstrap'

// BEGIN Components
import { NavbarPage } from './components/NavbarPage'
import { Article } from './components/articles/Article'
import { Author } from './components/authors/Author'
// END

// BEGIN Views
import { HomeView } from './views/HomeView'
import { ArticlesView } from './views/ArticlesView'
import { AuthorsView } from './views/AuthorsView'
// END

import './App.css'

export const App = () => {
	return (
		<Fragment>
			<BrowserRouter>
				<NavbarPage></NavbarPage>
				<Container>

					<Switch>
						<Route path="/articles/:article_id">
							<Article></Article>
						</Route>

						<Route path='/authors/:author_id'>
							<Author></Author>
						</Route>

						<Route path="/articles">
							<ArticlesView></ArticlesView>
						</Route>

						<Route path='/authors'>
							<AuthorsView></AuthorsView>
						</Route>

						<Route path='/' exact>
							<HomeView></HomeView>
						</Route>

						<Route>
							<h2>404</h2>
						</Route>

					</Switch>
				</Container>
			</BrowserRouter>
		</Fragment>
	);
}