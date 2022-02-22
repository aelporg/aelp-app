import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { ID } from '@nestjs/graphql'
import { HideField } from '@nestjs/graphql'
import { UserCount } from './user-count.output'
import { Country } from '../../country/types/country.model'
import { Role } from '../../../global-types/role.enum'
import { CompetitionParticipant } from '../../competition/types/competition-participant.model'
import { AssessmentAnswer } from '../../assessment/types/assessment-answer.model'
import { ClassroomMember } from '../../classroom/types/classroom-member.model'
import { LinkedAccount } from '../../linked-account/types/linked-account.model'
import { Competition } from '../../competition/types/competition.model'
import { EnvironmentPermission } from '../../environment/types/environment-permission.model'

@ObjectType()
export class User {
  @Field(() => ID, { nullable: false })
  id!: string

  @Field(() => String, { nullable: true })
  firstName!: string | null

  @Field(() => String, { nullable: true })
  lastName!: string | null

  @Field(() => String, { nullable: true })
  name: string | null

  @Field(() => String, { nullable: true })
  shortName: string | null

  @Field(() => String, { nullable: false })
  userName!: string

  @Field(() => String, { nullable: false })
  email!: string

  @Field(() => Country, { nullable: false })
  country?: Country

  @Field(() => String, { nullable: false })
  countryId!: string

  @Field(() => Role, { nullable: false, defaultValue: 'USER' })
  role!: keyof typeof Role

  @Field(() => Date, { nullable: false })
  updatedAt!: Date

  @Field(() => Date, { nullable: false })
  createdAt!: Date

  @Field(() => [LinkedAccount], { nullable: true })
  linkedAccounts?: Array<LinkedAccount>

  @Field(() => [ClassroomMember], { nullable: true })
  joinedClassrooms?: Array<ClassroomMember>

  @Field(() => [AssessmentAnswer], { nullable: true })
  assessmentAnswers?: Array<AssessmentAnswer>

  @Field(() => [EnvironmentPermission], { nullable: true })
  envirnmentPermissions?: Array<EnvironmentPermission>

  @Field(() => [CompetitionParticipant], { nullable: true })
  competitionsJoined?: Array<CompetitionParticipant>

  @Field(() => [Competition], { nullable: true })
  createdCompetitions?: Array<Competition>

  @Field(() => UserCount, { nullable: false })
  _count?: UserCount
}
