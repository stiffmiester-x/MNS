import {render,screen , cleanup} from '@testing-library/react'
import renderer from 'react-test-renderer'
import PostsWithAxios from '../Article'

afterEach(()=>{
    cleanup();
})

test('to render the component',()=>{
    render(<PostsWithAxios/>)
    const element=screen.getByTestId('imagediv')
    expect(element).toBeInTheDocument();
    expect(element).toHaveClass('axioscontainer')

})

test('should check the text', () => {
    render(<PostsWithAxios/>)
    const element=screen.getByTestId('imagediv')
    expect(element).not.toContainHTML('<a>')

})

test('snapshots', () => {
    const tree=renderer.create(<PostsWithAxios/>).toJSON()
    console.log(tree)
    expect(tree).toMatchSnapshot()
    
})

