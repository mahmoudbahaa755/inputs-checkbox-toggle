//  Next version

// import { renderHook, act } from '@testing-library/react-hooks';
// import useSelectFieldHook, { Field } from './selectFields';

// describe('useSelectFieldHook', () => {
//   it('should initialize with provided fields', () => {
//     const initialFields : Field[]= [{ field1: true }, { field2: false }];
//     const { result } = renderHook(() => useSelectFieldHook(initialFields));

//     expect(result.current.selectedFields).toEqual(initialFields);
//   });

//   it('should toggle selectAllChecked when selectAllChange is called', () => {
//     const initialFields: Field[] = [{ field1: false }, { field2: false }];
//     const { result } = renderHook(() => useSelectFieldHook(initialFields));

//     act(() => {
//       result.current.selectAllChange([{ label: 'field1', value: true }, { label: 'field2', value: true }]);
//     });

//     expect(result.current.selectAllChecked).toBe(true);
//   });

//   it('should update field value when selectChange is called', () => {
//     const initialFields :Field[]= [{ field1: true }, { field2: false }];
//     const { result } = renderHook(() => useSelectFieldHook(initialFields));

//     act(() => {
//       result.current.selectChange('field1', false);
//     });

//     expect(result.current.selectedFields).toEqual([{ field1: false }, { field2: false }]);
//   });

//   it('should correctly determine if a field is hidden', () => {
//     const initialFields :Field[]= [{ field1: true }, { field2: false }];
//     const { result } = renderHook(() => useSelectFieldHook(initialFields));

//     expect(result.current.isHidden('field1')).toBe(false);
//     expect(result.current.isHidden('field2')).toBe(true);
//   });
// });