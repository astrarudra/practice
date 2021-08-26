const { useRef, useMemo, useEffect } = require("react")

/* 
Hooks let you use state and other React features without writing a class.
Why ?
1. It’s hard to reuse stateful logic between components
Hooks allow you to reuse stateful logic without changing your component hierarchy. This makes it easy to share Hooks among many components or with the community.
2. Complex components become hard to understand - For example, componentDidMount and componentDidUpdate - Doing same thing. 
Hooks let you split one component into smaller functions based on what pieces are related (such as setting up a subscription or fetching data), rather than forcing a split based on lifecycle methods.
3. Classes confuse both people and machines
Classes don’t minify very well, and they make hot reloading flaky and unreliable. 
*/

fnCompoent = () => {
    // state 
    var [toggle, setToggle] = useState(true)

    // componentDidMount
    useEffect(() => {}, [])
    // componentWillRecieveProps
    useEffect(() => {}, [var1, var2])
    // componentWillUnmount
    useEffect(() => {
        return { /* clean up code */}
    }, [var1, var2])
    /* For Performace */
    // useMemo Hook lets you cache calculations between multiple renders by “remembering” the previous computation:
    // 
    const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
    const memoizedCallback = useCallback(
        () => {
          doSomething(a, b);
        },
        [a, b],
    );
    // componentShouldUpdate
    const Button = React.memo((props) => {
        /* your component
                This does a shallow comparison of props and not state (coz there are multiple states). This is not a hook
                It is equivalent to PureComponent, but it only compares props. 
        */
     }, /* 2nd param is for custom logic of comparison */ (oldProp, newProp) => { return true});
    
    // Refs
    const r = useRef() // r.current will have the DOM element.
    render = () => <div ref={r}></div>
    // Same as useEffect but it exe b4 rendering (runs before useEffect)- blocks and does not let browser to paint anything. 
    // Avoid using when possile. -> Usecase if UX is broken in the initial render
    useLayoutEffect(()=>{}, [])
    // UseReducer - Multistate / Complex Logic - Redux Style
    function reducer(state, action) {
        switch (action.type) {
          case 'increment':
            return {count: state.count + 1};
          default:
            throw new Error();
        }
    }
    const [state, dispatch] = useReducer(reducer, initialState);
}