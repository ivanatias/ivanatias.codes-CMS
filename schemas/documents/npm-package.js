import { GoPackage } from 'react-icons/go'

export default {
  name: 'package',
  title: 'NPM Package',
  type: 'document',
  icon: GoPackage,
  fields: [
    {
      name: 'packageName',
      title: 'Package name',
      type: 'string'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text'
    },
    {
      name: 'githubUrl',
      title: 'GitHub Url',
      type: 'string'
    }
  ],
  preview: {
    select: {
      title: 'packageName',
      desc: 'description'
    },
    prepare({ title, desc }) {
      return {
        title,
        subtitle: desc
      }
    }
  }
}
