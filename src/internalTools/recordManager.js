

import React, { useState, useEffect } from 'react';

export default function EditableTable() {
  const [data, setData] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({});
  const [columns, setColumns] = useState([]);
  const [isAddingNew, setIsAddingNew] = useState(false);
  const [newEntry, setNewEntry] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Load JSON file from directory
  useEffect(() => {
    const loadData = async () => {
      try {
       
        
        const RecordsList = require("../data/records.json");
        
        const dataArray = Array.isArray(RecordsList) ? RecordsList : [RecordsList];
        
        setData(dataArray);
        
        // Extract column names from first object
        if (dataArray.length > 0) {
          const cols = Object.keys(dataArray[0]);
          setColumns(cols);
          
          // Initialize new entry with empty values
          const emptyEntry = {};
          cols.forEach(col => emptyEntry[col] = '');
          setNewEntry(emptyEntry);
        }
        
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    loadData();
  }, []);

  // Start editing a row
  const startEdit = (item, index) => {
    setEditingId(index);
    setEditForm({ ...item });
  };

  // Save edited row
  const saveEdit = (index) => {
    const newData = [...data];
    newData[index] = editForm;
    setData(newData);
    setEditingId(null);
    setEditForm({});
  };

  // Cancel editing
  const cancelEdit = () => {
    setEditingId(null);
    setEditForm({});
  };

  // Delete row
  const deleteRow = (index) => {
    if (window.confirm('Are you sure you want to delete this entry?')) {
      const newData = data.filter((_, i) => i !== index);
      setData(newData);
    }
  };

  // Add new entry
  const addNewEntry = () => {
    setData([...data, newEntry]);
    
    // Reset new entry form
    const emptyEntry = {};
    columns.forEach(col => emptyEntry[col] = '');
    setNewEntry(emptyEntry);
    setIsAddingNew(false);
  };

  // Export data as JSON
  const exportData = () => {
    const jsonStr = JSON.stringify(data, null, 2);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'records.json';
    link.click();
    URL.revokeObjectURL(url);
  };

  if (loading) {
    return (
      <div style={{ padding: '40px', textAlign: 'center' }}>
        <p>Loading data...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ padding: '40px', textAlign: 'center' }}>
        <p style={{ color: '#e03a3e' }}>Error: {error}</p>
        <p style={{ marginTop: '10px', fontSize: '14px' }}>
          Make sure your JSON file is in the correct directory and the path is correct.
        </p>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px' }}>
         <h1 style={{marginTop:'20px', color:'white'}}className="hero-title">Records Manager</h1>
{/* Data Counter */}
<div style={{ marginTop: '20px', textAlign: 'center', fontSize: '14px' }}>
            <h2 style={{color:'white'}}>Total Entries: {data.length}</h2>
          </div>
        
      {/* Header */}
      <div style={{ color: 'white', marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
        {data.length > 0 && (
          <button onClick={exportData} className="button">
            <span>Download JSON</span>
          </button>
        )}
      </div>

      {/* Table */}
      {data.length > 0 ? (
        <>
          <div>
            <table style={{ width: 'fit-content', backgroundColor: 'white', borderCollapse: 'collapse', border: '2px solid #111' }}>
              <thead>
                <tr style={{ background: '#111', color: '#fff' }}>
                  {columns.map((col) => (
                    <th key={col} style={{ padding: '12px', textAlign: 'left', borderRight: '1px solid #333' }}>
                      {col}
                    </th>
                  ))}
                  <th style={{ padding: '12px', textAlign: 'center' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index} style={{ borderBottom: '1px solid #ddd' }}>
                    {columns.map((col) => (
                      <td key={col} style={{ padding: '10px', borderRight: '1px solid #ddd' }}>
                        {editingId === index ? (
                          <input
                            type="text"
                            value={editForm[col] || ''}
                            onChange={(e) => setEditForm({ ...editForm, [col]: e.target.value })}
                            style={{ 
                              width: '100%', 
                              padding: '8px', 
                              border: '2px solid #111',
                              borderRadius: '4px',
                              fontFamily: 'inherit'
                            }}
                          />
                        ) : (
                          <span>{item[col]}</span>
                        )}
                      </td>
                    ))}
                    <td style={{ padding: '10px', textAlign: 'center' }}>
                      {editingId === index ? (
                        <>
                          <button
                            onClick={() => saveEdit(index)}
                            style={{
                              padding: '6px 12px',
                              marginRight: '5px',
                              background: '#ffcd00',
                              border: '2px solid #111',
                              borderRadius: '4px',
                              cursor: 'pointer',
                              fontWeight: '600'
                            }}
                          >
                            Save
                          </button>
                          <button
                            onClick={cancelEdit}
                            style={{
                              padding: '6px 12px',
                              background: '#f3f3f3',
                              border: '2px solid #111',
                              borderRadius: '4px',
                              cursor: 'pointer',
                              fontWeight: '600'
                            }}
                          >
                            Cancel
                          </button>
                        </>
                      ) : (
                        <>
                          <button
                            onClick={() => startEdit(item, index)}
                            style={{
                              padding: '6px 12px',
                              marginRight: '5px',
                              background: '#fff',
                              border: '2px solid #111',
                              borderRadius: '4px',
                              cursor: 'pointer',
                              fontWeight: '600'
                            }}
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => deleteRow(index)}
                            style={{
                              padding: '6px 12px',
                              background: '#e03a3e',
                              color: '#fff',
                              border: '2px solid #111',
                              borderRadius: '4px',
                              cursor: 'pointer',
                              fontWeight: '600'
                            }}
                          >
                            Delete
                          </button>
                        </>
                      )}
                    </td>
                  </tr>
                ))}

                {/* Add New Entry Row */}
                
                {isAddingNew && (
                  <tr style={{ background: '#fffbeb', borderBottom: '1px solid #ddd' }}>
                    {columns.map((col) => (
                      <td key={col} style={{ padding: '10px', borderRight: '1px solid #ddd' }}>
                        <input
                          type="text"
                          value={newEntry[col] || ''}
                          onChange={(e) => setNewEntry({ ...newEntry, [col]: e.target.value })}
                          placeholder={`Enter ${col}`}
                          style={{ 
                            width: '100%', 
                            padding: '8px', 
                            border: '2px solid #111',
                            borderRadius: '4px',
                            fontFamily: 'inherit'
                          }}
                        />
                      </td>
                    ))}
                    <td style={{ padding: '10px', textAlign: 'center' }}>
                      <button
                        onClick={addNewEntry}
                        style={{
                          padding: '6px 12px',
                          marginRight: '5px',
                          background: '#ffcd00',
                          border: '2px solid #111',
                          borderRadius: '4px',
                          cursor: 'pointer',
                          fontWeight: '600'
                        }}
                      >
                        Save
                      </button>
                      <button
                        onClick={() => setIsAddingNew(false)}
                        style={{
                          padding: '6px 12px',
                          background: '#f3f3f3',
                          border: '2px solid #111',
                          borderRadius: '4px',
                          cursor: 'pointer',
                          fontWeight: '600'
                        }}
                      >
                        Cancel
                      </button>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
              {/* Add New Button */}
          {!isAddingNew && (
            <div style={{ marginTop: '20px', textAlign: 'center' }}>
              <button
                onClick={() => setIsAddingNew(true)}
                className="button"
              >
                <span>Add New Entry</span>
              </button>
            </div>
          )}
          </div>
        </>
      ) : (
        <div style={{ padding: '40px', textAlign: 'center', border: '2px solid #111', borderRadius: '8px' }}>
          <p>No data available</p>
        </div>
      )}
    </div>
  );
}