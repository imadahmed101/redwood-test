import type { QueryResolvers, MutationResolvers } from 'types/graphql'

import { validate } from '@redwoodjs/api'

import { db } from 'src/lib/db'

export const contacts: QueryResolvers['contacts'] = () => {
  return db.contact.findMany()
}

export const contact: QueryResolvers['contact'] = ({ id }) => {
  return db.contact.findUnique({
    where: { id },
  })
}

export const createContact: MutationResolvers['createContact'] = ({
  input
}) => {
  // validate(input.name, 'name', {
  //   length: { equal: 2}
  // })
  validate(input.email, 'email', { email: true })
  return db.contact.create({
    data: input,
  })
}

