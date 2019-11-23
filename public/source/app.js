/*jslint node: true */
"use strict";

let componentList = {};

let routePaths = {};

let self_closing_tags = ["area","base","br","col","embed","hr","img","input","link","meta","param","source","track","wbr"];

// templates
class Virtual_DOM_Element {
    constructor(tag="div", class_list=[], attributes=[]){
        this.tag = tag;
        this.self_closing = tag in self_closing_tags;
        this.class_list = class_list;
        this.attributes = attributes;
        this.children = [];
        this.event_listeners = [];
    }
}

class Component extends Virtual_DOM_Element {
    constructor(name){
        super(name);
        this.template = {};
        this.styleFile = null; // string
        this.scriptLogic = {}; 
    }
}

class TemplateBuilder {
    constructor(){}

    buildDOM(domNode, contents){
        let mock_contents = {};
    }

    virtualDOM(){

    }
}

// routes
class Route {
    constructor(){
        this.path=null; //string
        this.component=null; // Component
        this.redirect=null; // string
        this.accessRequired=null; // (!) How to restrict?
    }
}

// binding

// http service
class HttpService {
    
}

let mock_src_string = `
<div id="mock_id" class="mock_class" *if="mock_bool">
    <div *for="let mock_part of mock_part_list">
        {{mock_part.field_one}} - {{mock_part.field_two}}
    </div>
    <span id='footspan'>{{mock_foot}}</span>
</div>
`;

let mock_bool = true;

let mock_part_list = [
    {
        field_one: "One, One",
        field_two: "One, Two"
    },
    {
        field_one: "Two, One",
        field_two: "Two, Two"
    },
];

let mock_dom = {
    tag: "div",
    self_closing: false,
    class_list: ["mock_class"],
    

}

(function app() {
    document.addEventListener('DOMContentLoaded', (event)=>{
        let app_dom = document.querySelector("app-main");

        // to be replaced with a server call
        let dom_elems = [];
        // _________________________________

        let t_builder = new TemplateBuilder();
        t_builder.buildDOM(app_dom, dom_elems);
    });
}());