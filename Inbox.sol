// linter warnings (red underline) about pragma version can igonored!

// contract code will go here
pragma solidity ^0.4.17;

contract Inbox
{
    string public message;

    function Inbox(string IntialMessage) public
    {
        message = IntialMessage;
    }

    function setMessage(string newMessage) public
    {
        message = newMessage;
    }
}
