import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import { FileText, ChevronRight } from 'lucide-react';

const MarkdownNotes = () => {
  const [files, setFiles] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [content, setContent] = useState('');
  const [error, setError] = useState(null);

  const markdownFiles = [
    'C++.md',
    'Docker.md',
    'Git.md',
    'Linux Commands.md',
    'React.md',
    'Welcome.md'
  ];

  useEffect(() => {
    setFiles(markdownFiles);
  }, []);

  useEffect(() => {
    const fetchMarkdownFile = async () => {
      if (!selectedFile) return;

      try {
        const response = await fetch(`${process.env.PUBLIC_URL}/notes/${selectedFile}`);
        if (!response.ok) {
          throw new Error('Failed to fetch file');
        }
        const text = await response.text();
        setContent(text);
        setError(null);
      } catch (error) {
        console.error('Error fetching Markdown file:', error);
        setContent('');
        setError('Error loading Markdown content. Please try again.');
      }
    };

    fetchMarkdownFile();
  }, [selectedFile]);

  return (
    <Container>
      <Sidebar>
        <FileList>
          {files.map((file) => (
            <FileItem
              key={file}
              onClick={() => setSelectedFile(file)}
              selected={selectedFile === file}
            >
              <FileText size={18} />
              <FileName>{file.replace('.md', '')}</FileName>
              {selectedFile === file && <ChevronRight size={18} />}
            </FileItem>
          ))}
        </FileList>
      </Sidebar>
      <Content>
        {error && (
          <ErrorAlert>
            <ErrorTitle>Error</ErrorTitle>
            <ErrorDescription>{error}</ErrorDescription>
          </ErrorAlert>
        )}
        {selectedFile ? (
          <>
            <ContentTitle>{selectedFile.replace('.md', '')}</ContentTitle>
            <MarkdownContent>
              <ReactMarkdown>{content}</ReactMarkdown>
            </MarkdownContent>
          </>
        ) : (
          <PlaceholderText>
            Please select a file from the list to view its content.
          </PlaceholderText>
        )}
      </Content>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  height: 100vh;
  background-color: #0d0c0c;
`;

const Sidebar = styled.div`
  width: 30%;
  background-color: #1a1818;
  padding: 1rem;
  overflow-y: auto;
  border-right: 1px solid #e5e7eb;
`;

const FileList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const FileItem = styled.li`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  cursor: pointer;
  border-radius: 0.25rem;
  background-color: ${props => props.selected ? '#e6f2ff' : 'transparent'};
  color: ${props => props.selected ? '#3b82f6' : '#4b5563'};

  &:hover {
    background-color: ${props => props.selected ? '#e6f2ff' : '#f3f4f6'};
  }
`;

const FileName = styled.span`
  margin-left: 0.5rem;
  flex-grow: 1;
`;

const Content = styled.div`
  flex-grow: 1;
  padding: 2rem;
  overflow-y: auto;
`;

const ContentTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: white;
`;

const MarkdownContent = styled.div`
  color: #4b5563;

  h1, h2, h3, h4, h5, h6 {
    color: #1f2937;
    margin-top: 1.5em;
    margin-bottom: 0.5em;
  }

  p {
    margin-bottom: 1em;
  }

  a {
    color: #3b82f6;
    text-decoration: underline;
  }

  code {
    background-color: #f3f4f6;
    padding: 0.2em 0.4em;
    border-radius: 0.25rem;
    font-family: monospace;
  }

  pre {
    background-color: #f3f4f6;
    padding: 1em;
    border-radius: 0.25rem;
    overflow-x: auto;
  }
`;

const PlaceholderText = styled.p`
  color: #6b7280;
`;

const ErrorAlert = styled.div`
  background-color: #fee2e2;
  border: 1px solid #f87171;
  border-radius: 0.25rem;
  padding: 1rem;
  margin-bottom: 1rem;
`;

const ErrorTitle = styled.h3`
  color: #dc2626;
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const ErrorDescription = styled.p`
  color: #b91c1c;
`;

export default MarkdownNotes;