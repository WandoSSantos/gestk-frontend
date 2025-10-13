'use client';

import React, { useState, useEffect } from 'react';
import { Input } from '@gestk/ui';
import { Button } from '@gestk/ui';
import { Edit2, Check, X } from 'lucide-react';

interface EditableValueProps {
  value: number;
  onValueChange: (newValue: number) => void;
  format?: 'currency' | 'number' | 'percentage';
  prefix?: string;
  suffix?: string;
  className?: string;
  disabled?: boolean;
}

export function EditableValue({
  value,
  onValueChange,
  format = 'currency',
  prefix = '',
  suffix = '',
  className = '',
  disabled = false
}: EditableValueProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(value.toString());
  const [originalValue, setOriginalValue] = useState(value);

  useEffect(() => {
    setEditValue(value.toString());
    setOriginalValue(value);
  }, [value]);

  const formatDisplayValue = (val: number) => {
    switch (format) {
      case 'currency':
        return new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        }).format(val);
      case 'percentage':
        return `${val.toFixed(2)}%`;
      case 'number':
        return val.toLocaleString('pt-BR');
      default:
        return val.toString();
    }
  };

  const handleEdit = () => {
    if (disabled) return;
    setIsEditing(true);
    setEditValue(value.toString());
  };

  const handleSave = () => {
    const numericValue = parseFloat(editValue.replace(/[^\d.,]/g, '').replace(',', '.'));
    
    if (!isNaN(numericValue) && numericValue >= 0) {
      onValueChange(numericValue);
      setIsEditing(false);
    } else {
      setEditValue(originalValue.toString());
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    setEditValue(originalValue.toString());
    setIsEditing(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSave();
    } else if (e.key === 'Escape') {
      handleCancel();
    }
  };

  if (isEditing) {
    return (
      <div className={`flex items-center gap-2 ${className}`}>
        <Input
          type="text"
          value={editValue}
          onChange={(e) => setEditValue(e.target.value)}
          onKeyDown={handleKeyPress}
          className="w-24 h-8 text-sm"
          autoFocus
        />
        <Button
          size="sm"
          variant="ghost"
          onClick={handleSave}
          className="h-8 w-8 p-0 text-green-600 hover:text-green-700"
        >
          <Check className="h-4 w-4" />
        </Button>
        <Button
          size="sm"
          variant="ghost"
          onClick={handleCancel}
          className="h-8 w-8 p-0 text-red-600 hover:text-red-700"
        >
          <X className="h-4 w-4" />
        </Button>
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <span className="font-mono text-sm">
        {prefix}{formatDisplayValue(value)}{suffix}
      </span>
      {!disabled && (
        <Button
          size="sm"
          variant="ghost"
          onClick={handleEdit}
          className="h-6 w-6 p-0 text-gray-400 hover:text-gray-600"
        >
          <Edit2 className="h-3 w-3" />
        </Button>
      )}
    </div>
  );
}

