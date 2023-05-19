import { selectCourse, unSelectCourse, } from './courseActionCreators';


describe('Test action creators', () => {
	it('Test for the selectCourse action', () => {
	  expect(selectCourse(1)).toEqual({ type: 'SELECT_COURSE', index: 1 });
	});

	it('Test for the unselectCourse action', () => {
	  expect(unSelectCourse(1)).toEqual({ type: 'UNSELECT_COURSE', index: 1 });
	});

  });