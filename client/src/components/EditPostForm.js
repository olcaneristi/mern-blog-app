import React, { useState } from 'react';
import FileBase64 from 'react-file-base64';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { useForm, Controller } from 'react-hook-form';
import { updatePost } from '../redux/actions/post';
import { Textarea, Box, Flex, Heading, Select } from '@chakra-ui/react';
import { FormControl, FormLabel } from '@chakra-ui/form-control';
import { Button } from '@chakra-ui/button';
import { Input } from '@chakra-ui/input';

const categories = ['Frontend', 'Backend', 'Mobile', 'React', 'Vue', 'JavaScript', 'Fun', 'Gaming'];

const EditPostForm = ({ post, closeEditMode }) => {
  const [file, setFile] = useState(post?.image);
  const { register, errors, control, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const onSubmit = data => {
    try {
      const updatedPost = {
        _id: post._id,
        ...data,
        image: file,
      };
      dispatch(updatePost(post._id, updatedPost));
      toast.success('Blog successfully updated!');
      setFile(null);
      closeEditMode();
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <Flex maxW="900px" px={5} mx="auto" align="center" justify="center" minH={'90vh'}>
      <Box w="100%" px={10} py={5} bg={('white', 'gray.700')} borderRadius="lg" boxShadow="dark-lg">
        <Box textAlign="center">
          <Heading as="h2">Edit Post </Heading>
        </Box>
        <Box my={4} textAlign="left">
          <form noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
            <FormControl isInvalid={errors.title} minH={'100px'}>
              <FormLabel>Title</FormLabel>
              <Input
                id="title"
                label="Başlık"
                name="title"
                ref={register({
                  required: {
                    value: true,
                    message: 'This field is required.',
                  },
                })}
                defaultValue={post?.title}
              />
              {errors.title && <p className="validation__error">{errors.title.message}</p>}
            </FormControl>

            <FormControl isInvalid={errors.subtitle} minH={'100px'}>
              <FormLabel>Subtitle</FormLabel>
              <Input
                id="subtitle"
                label="Alt Başlık"
                name="subtitle"
                ref={register({
                  required: {
                    value: true,
                    message: 'This field is required.',
                  },
                })}
                defaultValue={post?.subtitle}
              />
              {errors.subtitle && <p className="validation__error">{errors.subtitle.message}</p>}
            </FormControl>

            <FormControl minH={'100px'}>
              <FormLabel>Category</FormLabel>
              <Controller
                as={
                  <Select placeholder="Choose Category">
                    {categories.map((category, i) => (
                      <option key={i} value={category}>
                        {category}
                      </option>
                    ))}
                  </Select>
                }
                name="tag"
                control={control}
                defaultValue={post?.tag}
              />
            </FormControl>

            <FormControl isInvalid={errors.content} minH={'100px'}>
              <FormLabel>Content</FormLabel>
              <Textarea
                id="content"
                label="İçerik"
                name="content"
                ref={register({
                  required: {
                    value: true,
                    message: 'This field is required.',
                  },
                  minLength: {
                    message: 'Content must contain at least 50 characters or more.',
                    value: 50,
                  },
                })}
                defaultValue={post?.content}
              />
              {errors.content && <p className="validation__error">{errors.content.message}</p>}
            </FormControl>

            <FormControl mt={4}>
              <FileBase64 multiple={false} onDone={({ base64 }) => setFile(base64)} />
            </FormControl>

            <Box mt={4} display="flex" alignItems="center" justifyContent="flex-end">
              <Button colorScheme="blue" mr={3} type="submit">
                Update
              </Button>
              <Button onClick={closeEditMode}>Cancel</Button>
            </Box>
          </form>
        </Box>
      </Box>
    </Flex>
  );
};

export default EditPostForm;
