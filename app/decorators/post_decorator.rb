class PostDecorator < Draper::Decorator
  delegate_all

  def created_at
    object.created_at.strftime("%b %d, %Y")
  end

  def updated_at
    object.updated_at.strftime("%b %d, %Y")
  end
end
