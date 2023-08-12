export const Friendlist = props => {
    return <ul>
        {props.items.map(item => <li>{item.name}</li>)}
</ul>
}
