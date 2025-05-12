import React from 'react';

export const ChessPiece = ({ piece, className = '' }) => {
  const pieces = {
    king: '♔',
    queen: '♕',
    bishop: '♗',
    knight: '♘',
    rook: '♖',
    pawn: '♙',
  };

  return <span className={`text-4xl ${className}`}>{pieces[piece]}</span>;
};


