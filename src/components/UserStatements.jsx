import React from "react";
import Button from '@mui/material/Button';

export const UserStatements = ({userStatement}) => {
    return (
        <div className="user-statements-container">
            <Button
                variant="contained"
                color="info"
                size="large"
            >
                {userStatement}
            </Button>
        </div>
    )
}

export default UserStatements;
