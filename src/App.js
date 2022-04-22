import React, {Component} from "react";
import { BrowserRouter,Switch, Route } from "react-router-dom";

//CSS COMPONENT IMPORTS
import './font-awesome-4.7.0/css/font-awesome.min.css';

import Layout from './components/layout/Layout';
import Wrap from './components/section/Wrap';
import Category from './components/section/Category';
import PartGrid from './components/section/PartGrid';
import Contact from './components/page/Contact';
import Single from './components/section/Single';
import Footer from './components/section/Footer';
import Center from './components/parts/Center';

class App extends Component {
    state = {
        category:null,
        hg:false
    }
    componentDidMount = async () => {
        const Cosmic = require('cosmicjs');
        const api = Cosmic();
        const bucket = api.bucket({
            slug: 'shot-by-yeab-production'
        })
        const data = await bucket.getObjects({
            type: 'categories'
        })

        this.setState({
            category: data.objects,
        })
        document.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                this.setState({
                    hg: true
                })
            }
            else {
                this.setState({
                    hg: false
                })
            }
        });
    }
    handleMenu = () => {
        this.setState((prevProps) => ({visable: !this.prevProps.visible}));
    }

    render() {
        console.log(this.state.category);
        
        return (
            <div className="App">
                <Layout>
                    <BrowserRouter>
                        <>
                            <Wrap hg={this.state.hg}/>
                            <Switch>
                                <Route path="/" exact render={(props) => <Category category={this.state.category}/>}/>
                                <Route path='/contact' exact component={Contact} />
                                <Route path='/img/:slug' component={Single} exact />
                                <Route path='/:slug' component={PartGrid} exact />
                            </Switch>
                        </>
                    </BrowserRouter>
                    <Center fs>"Yeabsira Moges's Photography Portfolio"</Center>
                    <Footer/>
                </Layout>
            </div>
        );
    }
}

