// import React from 'react'
// import {ButtonGroup, Button, styled} from '@mui/material'

// import { useDispatch } from 'react-redux';
// import { updateCartQtyAction } from '../../redux/actions/cartAction'

// const Component = styled(ButtonGroup)`
//     margin-top : 30px;
// ` 

// const StyledButton = styled(Button)`
//     border-radius: 50%
// `;





// const GroupButton = ({item}) => {

//   const dispatch = useDispatch();

//     // + Button-er jonno logic
//     const handleIncrement = () => {
//         const newQty = item.quantity + 1;
//         dispatch(updateCartQtyAction(item.productId._id, newQty));
//     };

//     // - Button-er jonno logic
//     const handleDecrement = () => {
//         if (item.quantity > 1) {
//             const newQty = item.quantity - 1;
//             dispatch(updateCartQtyAction(item.productId._id, newQty));
//         }
//     };


//   return (
//     <Component>
//       <StyledButton onClick={handleDecrement} disabled={item.quantity <= 1}>-</StyledButton>
//       <Button disable disabled style={{ color: '#000' }}>{item.quantity}</Button>
//       <StyledButton onClick={handleIncrement}>+</StyledButton>
//     </Component>
//   )
// }

// export default GroupButton


import React from 'react'
import { ButtonGroup, Button, styled } from '@mui/material'
import { useDispatch } from 'react-redux';
import { updateCartQtyAction } from '../../redux/actions/cartAction'

const Component = styled(ButtonGroup)`
    margin-top: 30px;
`

const StyledButton = styled(Button)`
    border-radius: 50%;
`;

const GroupButton = ({ item }) => {
    const dispatch = useDispatch();

    const handleIncrement = () => {
        const newQty = item.quantity + 1;
        // FIX: dispatch immediately triggers Redux update → UI re-renders at once
        dispatch(updateCartQtyAction(item.productId._id, newQty));
    };

    const handleDecrement = () => {
        if (item.quantity > 1) {
            const newQty = item.quantity - 1;
            dispatch(updateCartQtyAction(item.productId._id, newQty));
        }
    };

    return (
        <Component>
            <StyledButton onClick={handleDecrement} disabled={item.quantity <= 1}>-</StyledButton>
            {/* FIX: remove duplicate `disable` prop — only use `disabled` */}
            <Button disabled style={{ color: '#000' }}>{item.quantity}</Button>
            <StyledButton onClick={handleIncrement}>+</StyledButton>
        </Component>
    );
};

export default GroupButton;
