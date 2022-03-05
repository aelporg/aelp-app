import { PrismaService } from '@aelp-app/models'
import { Injectable } from '@nestjs/common'
import { UserInputError } from 'apollo-server-errors'
import { CreateCompetitionInput } from './types/create-competition-input-type'
import { User } from '../user/types/user.model'

@Injectable()
export default class CompetitionService {
  constructor(private prismaService: PrismaService) { }

  async createCompetition(data: CreateCompetitionInput, user: User) {

    return this.prismaService.competition.create({
      data: {
        ...data,
        creatorUser: { connect: { id: user.id } },
      },
    })
  }

  async updateCompetition(id: string, data: CreateCompetitionInput, user: User) {
    const competition = await this.prismaService.competition.findUnique({
      where: { id },
    })

    if (competition.creatorUserId !== user.id) {
      throw new UserInputError('You are not allowed to update this competition')
    }

    return this.prismaService.competition.update({
      where: { id },
      data: { data },
    })
  }

  async deleteCompetition(id: string, user: User) {
    const competition = await this.prismaService.competition.findUnique({
      where: { id },
    })

    if (competition.creatorUserId !== user.id) {
      throw new UserInputError('You are not allowed to delete this competition')
    }

    return this.prismaService.competition.delete({
      where: { id },
    })
  }

  async joinCompetition(id: string, user: User) {
    const competition = await this.prismaService.competition.findUnique({
      where: { id },
    })

    if (competition.creatorUserId === user.id) {
      throw new UserInputError('You are the creator of this competition')
    }

    return this.prismaService.competitionParticipant.create({
      data: {
        competition: { connect: { id: competition.id } },
        user: { connect: { id: user.id } },
      },
    })
  }

  async leaveCompetition(id: string, user: User) {
    const competition = await this.prismaService.competition.findUnique({
      where: { id },
    })

    if (competition.creatorUserId === user.id) {
      throw new UserInputError('You are the creator of this competition')
    }

    return this.prismaService.competitionParticipant.delete({
      where: {
        competitionId: competition.id,
        userId: user.id,
      },
    })
  }

  getCompetitionById(id: string) {
    return this.prismaService.competition.findUnique({
      where: { id },
    })
  }

  async getCompetitions(user: User) {
    return this.prismaService.competition.findMany({
      where: {
        creatorUserId: user.id,
      },
    })
  }

}
